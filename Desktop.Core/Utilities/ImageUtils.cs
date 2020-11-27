﻿using System;
using System.Collections.Generic;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;
using System.Linq;
using System.Runtime.InteropServices;

namespace Remotely.Desktop.Core.Utilities
{
    public class ImageUtils
    {
        public static ImageCodecInfo JpegEncoder { get; } = ImageCodecInfo.GetImageEncoders().FirstOrDefault(x => x.FormatID == ImageFormat.Jpeg.Guid);
        public static byte[] EncodeBitmap(Bitmap bitmap, EncoderParameters encoderParams)
        {
            using var ms = new MemoryStream();
            bitmap.Save(ms, JpegEncoder, encoderParams);
            return ms.ToArray();
        }

        public static List<Rectangle> GetDiffAreas(Bitmap currentFrame, Bitmap previousFrame, bool captureFullscreen)
        {
            var changes = new List<Rectangle>();

            if (currentFrame == null || previousFrame == null)
            {
                return changes;
            }

            if (captureFullscreen)
            {
                changes.Add(new Rectangle(new Point(0, 0), currentFrame.Size));
                return changes;
            }
            if (currentFrame.Height != previousFrame.Height || currentFrame.Width != previousFrame.Width)
            {
                throw new Exception("Bitmaps are not of equal dimensions.");
            }
            if (currentFrame.PixelFormat != previousFrame.PixelFormat)
            {
                throw new Exception("Bitmaps are not the same format.");
            }
            var width = currentFrame.Width;
            var height = currentFrame.Height;
            int left = int.MaxValue;
            int top = int.MaxValue;
            int right = int.MinValue;
            int bottom = int.MinValue;

            BitmapData bd1 = null;
            BitmapData bd2 = null;

            try
            {
                bd1 = previousFrame.LockBits(new Rectangle(0, 0, width, height), ImageLockMode.ReadOnly, currentFrame.PixelFormat);
                bd2 = currentFrame.LockBits(new Rectangle(0, 0, width, height), ImageLockMode.ReadOnly, previousFrame.PixelFormat);

                var bytesPerPixel = Bitmap.GetPixelFormatSize(currentFrame.PixelFormat) / 8;
                var totalSize = bd1.Height * bd1.Width * bytesPerPixel;

                unsafe
                {
                    byte* scan1 = (byte*)bd1.Scan0.ToPointer();
                    byte* scan2 = (byte*)bd2.Scan0.ToPointer();

                    var changeOnCurrentRow = false;
                    var changeOnPreviousRow = false;

                    for (var row = 0; row < height; row++)
                    {
                        changeOnPreviousRow = changeOnCurrentRow;
                        changeOnCurrentRow = false;

                        for (var column = 0; column < width; column++)
                        {
                            var index = (row * width * bytesPerPixel) + (column * bytesPerPixel);

                            byte* data1 = scan1 + index;
                            byte* data2 = scan2 + index;

                            if (data1[0] != data2[0] ||
                                data1[1] != data2[1] ||
                                data1[2] != data2[2] ||
                                data1[3] != data2[3])
                            {
                                changeOnCurrentRow = true;

                                if (row < top)
                                {
                                    top = row;
                                }
                                if (row > bottom)
                                {
                                    bottom = row;
                                }
                                if (column < left)
                                {
                                    left = column;
                                }
                                if (column > right)
                                {
                                    right = column;
                                }
                            }

                        }
                        if (!changeOnCurrentRow &&
                            changeOnPreviousRow &&
                            left <= right && 
                            top <= bottom)
                        {
                            AddChangeToList(changes, left, top, right, bottom, width, height);

                            left = int.MaxValue;
                            top = int.MaxValue;
                            right = int.MinValue;
                            bottom = int.MinValue;
                        }
                    }
                    if (changeOnCurrentRow &&
                        left <= right &&
                        top <= bottom)
                    {
                        AddChangeToList(changes, left, top, right, bottom, width, height);
                    }
                }

                return changes;
            }
            catch
            {
                return changes;
            }
            finally
            {
                currentFrame.UnlockBits(bd1);
                previousFrame.UnlockBits(bd2);
            }
        }

        public static Bitmap GetImageDiff(Bitmap currentFrame, Bitmap previousFrame, bool captureFullscreen)
        {
            if (captureFullscreen)
            {
                return (Bitmap)currentFrame.Clone();
            }

            if (currentFrame.Height != previousFrame.Height || currentFrame.Width != previousFrame.Width)
            {
                throw new Exception("Bitmaps are not of equal dimensions.");
            }
            if (!Bitmap.IsAlphaPixelFormat(currentFrame.PixelFormat) || !Bitmap.IsAlphaPixelFormat(previousFrame.PixelFormat) ||
                !Bitmap.IsCanonicalPixelFormat(currentFrame.PixelFormat) || !Bitmap.IsCanonicalPixelFormat(previousFrame.PixelFormat))
            {
                throw new Exception("Bitmaps must be 32 bits per pixel and contain alpha channel.");
            }
            var width = currentFrame.Width;
            var height = currentFrame.Height;

            var mergedFrame = new Bitmap(width, height);

            var bd1 = previousFrame.LockBits(new Rectangle(0, 0, width, height), ImageLockMode.ReadOnly, currentFrame.PixelFormat);
            var bd2 = currentFrame.LockBits(new Rectangle(0, 0, width, height), ImageLockMode.ReadOnly, previousFrame.PixelFormat);
            var bd3 = mergedFrame.LockBits(new Rectangle(0, 0, width, height), ImageLockMode.WriteOnly, currentFrame.PixelFormat);

            try
            {
                var bytesPerPixel = Bitmap.GetPixelFormatSize(currentFrame.PixelFormat) / 8;
                var totalSize = bd1.Height * bd1.Width * bytesPerPixel;

                unsafe
                {
                    byte* scan1 = (byte*)bd1.Scan0.ToPointer();
                    byte* scan2 = (byte*)bd2.Scan0.ToPointer();
                    byte* scan3 = (byte*)bd3.Scan0.ToPointer();

                    for (int counter = 0; counter < totalSize - bytesPerPixel; counter += bytesPerPixel)
                    {
                        byte* data1 = scan1 + counter;
                        byte* data2 = scan2 + counter;
                        byte* data3 = scan3 + counter;

                        if (data1[0] != data2[0] ||
                            data1[1] != data2[1] ||
                            data1[2] != data2[2] ||
                            data1[3] != data2[3])
                        {
                            data3[0] = data2[0];
                            data3[1] = data2[1];
                            data3[2] = data2[2];
                            data3[3] = data2[3];
                        }
                    }
                }


                return mergedFrame;

            }
            catch
            {
                return mergedFrame;
            }
            finally
            {
                previousFrame.UnlockBits(bd1);
                currentFrame.UnlockBits(bd2);
                mergedFrame.UnlockBits(bd3);
            }
        }

        private static void AddChangeToList(List<Rectangle> changes, int left, int top, int right, int bottom, int width, int height)
        {
            // Bounding box is valid.  Padding is necessary to prevent artifacts from
            // moving windows.
            left = Math.Max(left - 5, 0);
            top = Math.Max(top - 5, 0);
            right = Math.Min(right + 5, width);
            bottom = Math.Min(bottom + 5, height);

            changes.Add(new Rectangle(left, top, right - left, bottom - top));
        }
    }
}
