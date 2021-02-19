﻿using Microsoft.AspNetCore.SignalR.Client;
using Remotely.Shared.Services;
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace Remotely.Tests.LoadTester
{
    internal class Program
    {
        private static SemaphoreSlim _lock = new SemaphoreSlim(10, 10);
        private static int _agentCount;
        private static string _organizationId;
        private static string _serverurl;
        private static Dictionary<string, HubConnection> _connections;

        private static void Main(string[] args)
        {
            ConnectAgents();

            Console.Write("Press Enter to exit...");
            Console.ReadLine();
        }

        private static void ConnectAgents()
        {
            try
            {
                if (!CommandLineParser.CommandLineArgs.ContainsKey("serverurl") ||
                       !CommandLineParser.CommandLineArgs.ContainsKey("organizationid") ||
                       !CommandLineParser.CommandLineArgs.ContainsKey("agentcount"))
                {
                    Console.WriteLine("Command line arguments must include all of the following: ");
                    Console.WriteLine();
                    Console.WriteLine("-serverurl [full URL of the Remotely server]");
                    Console.WriteLine();
                    Console.WriteLine("-organizationid [organization ID that the device will belong to]");
                    Console.WriteLine();
                    Console.WriteLine("-agentcount [the number of agent connections to simulate]");
                    Console.WriteLine();
                    Console.WriteLine("Press Enter to exit...");
                    Environment.Exit(0);
                }

                _agentCount = int.Parse(CommandLineParser.CommandLineArgs["agentcount"]);
                _organizationId = CommandLineParser.CommandLineArgs["organizationid"];
                _serverurl = CommandLineParser.CommandLineArgs["serverurl"];
                _connections = new Dictionary<string, HubConnection>();

                for (var i = 0; i < _agentCount; i++)
                {
                    _ = StartAgent(i);
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("An error occurred.  Check your syntex.  Error: ");
                Console.WriteLine();
                Console.WriteLine(ex.Message);
            }
        }

        private static async Task StartAgent(int i)
        {
            try
            {
                await _lock.WaitAsync();

                var deviceId = Guid.NewGuid().ToString();

                var hubConnection = new HubConnectionBuilder()
                    .WithUrl(_serverurl + "/AgentHub")
                    .Build();

                Console.WriteLine("Connecting device number " + i.ToString());
                await hubConnection.StartAsync();

                var device = await DeviceInformation.Create(deviceId, _organizationId);
                device.DeviceName = "TestDevice-" + Guid.NewGuid();

                var result = await hubConnection.InvokeAsync<bool>("DeviceCameOnline", device);

                if (!result)
                {
                    Console.WriteLine($"Device {i} failed to come online.");
                    return;
                }

                var heartbeatTimer = new System.Timers.Timer(TimeSpan.FromMinutes(1).TotalMilliseconds);
                heartbeatTimer.Elapsed += async (sender, args) =>
                {
                    var currentInfo = await DeviceInformation.Create(device.ID, _organizationId);
                    currentInfo.DeviceName = device.DeviceName;
                    await hubConnection.SendAsync("DeviceHeartbeat", currentInfo);
                };
                heartbeatTimer.Start();
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Device {i} failed to connect.");
                Console.WriteLine(ex.Message);
            }
            finally
            {
                _lock.Release();
            }
        }
    }
}