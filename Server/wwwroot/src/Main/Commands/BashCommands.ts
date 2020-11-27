﻿import { ConsoleCommand } from "../../Shared/Models/ConsoleCommand.js";


var commands: Array<ConsoleCommand> = [
    new ConsoleCommand(
        'accept',
        [
        ],
        'Accept or Reject jobs to a destination, such as a printer.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'access',
        [
        ],
        'Check a user\'s RWX permission for a file.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'aclocal',
        [
        ],
        'GNU autoconf too',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'aconnect',
        [
        ],
        'ALSA sequencer connection manager.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'acpi',
        [
        ],
        'Show information about the Advanced Configuration and Power Interface.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'acpi_available',
        [
        ],
        'Check if ACPI functionality exists on the system.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'acpid',
        [
        ],
        'Informs user-space programs about ACPI events.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'addr2line',
        [
        ],
        'Used to convert addresses into file names and line numbers.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'addresses',
        [
        ],
        'Formats for internet mail addresses.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'agetty',
        [
        ],
        'An alternative Linux Getty',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'alias',
        [
        ],
        'Create an alias for Linux commands',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'alsactl',
        [
        ],
        'Access advanced controls for ALSA soundcard driver.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'amidi',
        [
        ],
        'Perform read/write operation for ALSA RawMIDI ports.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'amixer',
        [
        ],
        'Access CLI-based mixer for ALSA soundcard driver.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'anacron',
        [
        ],
        'Used to run commands periodically.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'aplay',
        [
        ],
        'Sound recorder and player for CLI.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'aplaymidi',
        [
        ],
        'CLI utility used to play MIDI files.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'apm',
        [
        ],
        'Show Advanced Power Management (APM) hardware info on older systems.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'apmd',
        [
        ],
        'Used to handle events reported by APM BIOS drivers.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'apropos',
        [
        ],
        'Shows the list of all man pages containing a specific keyword',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'apt',
        [
        ],
        'Advanced Package Tool, a package management system for Debian and derivatives.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'apt-get',
        [
        ],
        'Command-line utility to install/remove/update packages based on APT system.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'aptitude',
        [
        ],
        'Another utility to add/remove/upgrade packages based on the APT system.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'ar',
        [
        ],
        'A utility to create/modify/extract from archives.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'arch',
        [
        ],
        'Display print machine hardware name.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'arecord',
        [
        ],
        'Just like aplay, it\'s a sound recorder and player for ALSA soundcard driver.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'arecordmidi',
        [
        ],
        'Record standard MIDI files.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'arp',
        [
        ],
        'Used to make changes to the system\'s ARP cache',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'as',
        [
        ],
        'A portable GNU assembler.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'aspell',
        [
        ],
        'An interactive spell checker utility.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'at',
        [
        ],
        'Used to schedule command execution at specified date &amp; time, reading commands from an input file.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'atd',
        [
        ],
        'Used to execute jobs queued by the at command.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'atq',
        [
        ],
        'List a user\'s pending jobs for the at command.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'atrm',
        [
        ],
        'Delete jobs queued by the at command.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'audiosend',
        [
        ],
        'Used to send an audio recording as an email.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'aumix',
        [
        ],
        'An audio mixer utility.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'autoconf',
        [
        ],
        'Generate configuration scripts from a TEMPLATE-FILE and send the output to standard output.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'autoheader',
        [
        ],
        'Create a template header for configure.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'automake',
        [
        ],
        'Creates GNU standards-compliant Makefiles from template files',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'autoreconf',
        [
        ],
        'Update generated configuration files.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'autoscan',
        [
        ],
        'Generate a preliminary <span class="skimlinks-unlinked">configure.in</span>',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'autoupdate',
        [
        ],
        'Update a <span class="skimlinks-unlinked">configure.in</span> file to newer autoconf.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'awk',
        [
        ],
        'Used to find and replace text in a file(s).',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'badblocks',
        [
        ],
        'Search a disk partition for bad sectors.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'banner',
        [
        ],
        'Used to print characters as a poster.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'basename',
        [
        ],
        'Used to display filenames with directoy or suffix.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'bash',
        [
        ],
        'GNU Bourne-Again Shell.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'batch',
        [
        ],
        'Used to run commands entered on a standard input.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'bc',
        [
        ],
        'Access the GNU bc calculator utility.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'bg',
        [
        ],
        'Send processes to the background.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'biff',
        [
        ],
        'Notify about incoming mail and sender\'s name on a system running comsat server.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'bind',
        [
        ],
        'Used to attach a name to a socket.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'bison',
        [
        ],
        'A GNU parser generator, compatible with yacc.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'break',
        [
        ],
        'Used to exit from a loop (eg: for, while, select).',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'builtin',
        [
        ],
        'Used to run shell builtin commands, make custom functions forcommands extending their functionality.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'bzcmp',
        [
        ],
        'Used to call the cmp program forbzip2 compressed files.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'bzdiff',
        [
        ],
        'Used to call the diff program for bzip2 compressed files.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'bzgrep',
        [
        ],
        'Used to call grep for bzip2 compressed files.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'bzip2',
        [
        ],
        'A block-sorting file compressor used to shrink given files.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'bzless',
        [
        ],
        'Used to apply \'less\' (show info one page at a time) to bzip2 compressed files.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'bzmore',
        [
        ],
        'Used to apply \'more\' (an inferior version of less) to bzip2 compressed files.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'cal',
        [
        ],
        'Show calendar.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'cardctl',
        [
        ],
        'Used to control PCMCIA sockets and select configuration schemes.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'cardmgr',
        [
        ],
        'Keeps an eye on the added/removes sockets for PCMCIA devices.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'case',
        [
        ],
        'Execute a command conditionally by matching a pattern.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'cat',
        [
        ],
        'Used to concatenate files and print them on the screen.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'cc',
        [
        ],
        'GNU C and C++ compiler.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'cd',
        [
        ],
        'Used to change directory.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'cdda2wav',
        [
        ],
        'Used to rip a CD-ROM and make WAV file.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'cdparanoia',
        [
        ],
        'Record audio from CD more reliably using data-verification algorithms.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'cdrdao',
        [
        ],
        'Used to write all the content specified to a file to a CD all at once.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'cdrecord',
        [
        ],
        'Used to record data or audio compact discs.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'cfdisk',
        [
        ],
        'Show or change the disk partition table.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'chage',
        [
        ],
        'Used to change user password information.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'chattr',
        [
        ],
        'Used to change file attributes.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'chdir',
        [
        ],
        'Used to change active working directory.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'chfn',
        [
        ],
        'Used to change real user name and information.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'chgrp',
        [
        ],
        'Used to change group ownership for file.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'chkconfig',
        [
        ],
        'Manage execution of runlevel services.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'chmod',
        [
        ],
        'Change access permission for a file(s).',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'chown',
        [
        ],
        'Change the owner or group for a file.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'chpasswd',
        [
        ],
        'Update password in a batch.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'chroot',
        [
        ],
        'Run a command with root privileges.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'chrt',
        [
        ],
        'Alter process attributed in real-time.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'chsh',
        [
        ],
        'Switch login shell.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'chvt',
        [
        ],
        'Change foreground virtual terminal.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'cksum',
        [
        ],
        'Perform a CRC checksum for files.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'clear',
        [
        ],
        'Used to clear the terminal window.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'cmp',
        [
        ],
        'Compare two files (byte by byte).',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'col',
        [
        ],
        'Filter reverse (and half-reverse) line feeds from the input.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'colcrt',
        [
        ],
        'Filter nroff output for CRT previewing.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'colrm',
        [
        ],
        'Remove columns from the lines of a file.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'column',
        [
        ],
        'A utility that formats its input into columns.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'comm',
        [
        ],
        'Used to compare two sorted files line by line.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'command',
        [
        ],
        'Used to execute a command with arguments ignoring shell function named command.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'compress',
        [
        ],
        'Used to compress one or more file(s) and replacing the originals ones.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'continue',
        [
        ],
        'Resume the next iteration of a loop.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'cp',
        [
        ],
        'Copy contents of one file to another.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'cpio',
        [
        ],
        'Copy files from and to archives.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'cpp',
        [
        ],
        'GNU C language processor.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'cron',
        [
        ],
        'A daemon to execute scheduled commands.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'crond',
        [
        ],
        'Same work as cron.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'crontab',
        [
        ],
        'Manage crontab files (containing schedules commands) for users.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'csplit',
        [
        ],
        'Split a file into sections on the basis of context lines.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'ctags',
        [
        ],
        'Make a list of functions and macro names defined in a programming source file.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'cupsd',
        [
        ],
        'A scheduler for CUPS.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'curl',
        [
        ],
        'Used to transfer data from or to a server using supported protocols.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'cut',
        [
        ],
        'Used to remove sections from each line of a file(s).',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'cvs',
        [
        ],
        'Concurrent Versions System. Used to track file versions, allow storage/retrieval of previous versions, and enables multiple users to work on the same file.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'date',
        [
        ],
        'Show system date and time.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'dc',
        [
        ],
        'Desk calculator utility.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'dd',
        [
        ],
        'Used to convert and copy a file, create disk clone, write disk headers, etc.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'ddrescue',
        [
        ],
        'Used to recover data from a crashed partition.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'deallocvt',
        [
        ],
        'Deallocates kernel memory for unused virtual consoles.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'debugfs',
        [
        ],
        'File system debugger for ext2/ext3/ext4',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'declare',
        [
        ],
        'Used to declare variables and assign attributes.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'depmod',
        [
        ],
        'Generate <span class="skimlinks-unlinked">modules.dep</span> and map files.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'devdump',
        [
        ],
        'Interactively displays the contents of device or file system ISO.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'df',
        [
        ],
        'Show disk usage.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'diff',
        [
        ],
        'Used to compare files line by line.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'diff3',
        [
        ],
        'Compare three files line by line.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'dig',
        [
        ],
        'Domain Information Groper, a DNS lookup utility.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'dir',
        [
        ],
        'List the contents of a directory.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'dircolors',
        [
        ],
        'Set colors for \'ls\' by altering the LS_COLORS environment variable.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'dirname',
        [
        ],
        'Display pathname after removing the last slash and characters thereafter.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'dirs',
        [
        ],
        'Show the list of remembered directories.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'disable',
        [
        ],
        'Restrict access to a printer.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'dlpsh',
        [
        ],
        'Interactive Desktop Link Protocol (DLP) shell for PalmOS.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'dmesg',
        [
        ],
        'Examine and control the kernel ring buffer.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'dnsdomainname',
        [
        ],
        'Show the DNS domain name of the system.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'dnssec-keygen',
        [
        ],
        'Generate encrypted Secure DNS keys for a given domain name.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'dnssec-makekeyset',
        [
        ],
        'Produce domain key set from one or more DNS security keys generated by dnssec-keygen.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'dnssec-signkey',
        [
        ],
        'Sign a secure DNS keyset with key signatures specified in the list of key-identifiers.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'dnssec-signzone',
        [
        ],
        'Sign a secure DNS zonefile with the signatures in the specified list of key-identifiers.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'doexec',
        [
        ],
        'Used to run an executable with an arbitrary argv list provided.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'domainname',
        [
        ],
        'Show or set the name of current NIS (Network Information Services) domain.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'dosfsck',
        [
        ],
        'Check and repair MS-DOS file systems.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'du',
        [
        ],
        'Show disk usage summary for a file(s).',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'dump',
        [
        ],
        'Backup utility for ext2/ext3 file systems.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'dumpe2fs',
        [
        ],
        'Dump ext2/ext3/ext4 file systems.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'dumpkeys',
        [
        ],
        'Show information about the keyboard driver\'s current translation tables.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'e2fsck',
        [
        ],
        'Used to check ext2/ext3/ext4 file systems.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'e2image',
        [
        ],
        'Store important ext2/ext3/ext4 filesystem metadata to a file.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'e2label',
        [
        ],
        'Show or change the label on an ext2/ext3/ext4 filesystem.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'echo',
        [
        ],
        'Send input string(s) to standard output i.e. display text on the screen.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'ed',
        [
        ],
        'GNU Ed û a line-oriented text editor.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'edquota',
        [
        ],
        'Used to edit filesystem quotas using a text editor, such as vi.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'egrep',
        [
        ],
        'Search and display text matching a pattern.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'eject',
        [
        ],
        'Eject removable media.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'elvtune',
        [
        ],
        'Used to set latency in the elevator algorithm used to schedule I/O activities for specified block devices.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'emacs',
        [
        ],
        'Emacs text editor command line utility.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'enable',
        [
        ],
        'Used to enable/disable shell builtin commands.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'env',
        [
        ],
        'Run a command in a modified environment. Show/set/delete environment variables.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'envsubst',
        [
        ],
        'Substitute environment variable values in shell format strings.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'esd',
        [
        ],
        'Start the Enlightenment Sound Daemon (EsounD or esd). Enables multiple applications to access the same audio device simultaneously.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'esd-config',
        [
        ],
        'Manage EsounD configuration.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'esdcat',
        [
        ],
        'Use EsounD to send audio data from a specified file.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'esdctl',
        [
        ],
        'EsounD control program.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'esddsp',
        [
        ],
        'Used to reroute non-esd audio data to esd and control all the audio using esd.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'esdmon',
        [
        ],
        'Used to copy the sound being sent to a device. Also, send it to a secondary device.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'esdplay',
        [
        ],
        'Use EsounD system to play a file.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'esdrec',
        [
        ],
        'Use EsounD to record audio to a specified file.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'esdsample',
        [
        ],
        'Sample audio using esd.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'etags',
        [
        ],
        'Used to create a list of functions and macros from a programming source file. These etags are used by emacs. For vi, use ctags.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'ethtool',
        [
        ],
        'Used to query and control network driver and hardware settings.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'eval',
        [
        ],
        'Used to evaluate multiple commands or arguments are once.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'ex',
        [
        ],
        'Interactive command',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'exec',
        [
        ],
        'An interactive line-based text editor.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'exit',
        [
        ],
        'Exit from the terminal.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'expand',
        [
        ],
        'Convert tabs into spaces in a given file and show the output.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'expect',
        [
        ],
        'An extension to the Tcl script, it\'s used to automate interaction with other applications based on their expected output.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'export',
        [
        ],
        'Used to set an environment variable.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'expr',
        [
        ],
        'Evaluate expressions and display them on standard output.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'factor',
        [
        ],
        'Display prime factors of specified integer numbers.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'false',
        [
        ],
        'Do nothing, unsuccessfully. Exit with a status code indicating failure.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'fc-cache',
        [
        ],
        'Make font information cache after scanning the directories.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'fc-list',
        [
        ],
        'Show the list of available fonts.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'fdformat',
        [
        ],
        'Do a low-level format on a floppy disk.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'fdisk',
        [
        ],
        'Make changes to the disk partition table.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'fetchmail',
        [
        ],
        'Fetch mail from mail servers and forward it to the local mail delivery system.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'fg',
        [
        ],
        'Used to send a job to the foreground.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'fgconsole',
        [
        ],
        'Display the number of the current virtual console.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'fgrep',
        [
        ],
        'Display lines from a file(s) that match a specified string. A variant of grep.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'file',
        [
        ],
        'Determine file type for a file.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'find',
        [
        ],
        'Do a file search in a directory hierarchy.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'finger',
        [
        ],
        'Display user data including the information listed in <em>.plan</em>and <em>.project</em>in each user\'s home directory.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'fingerd',
        [
        ],
        'Provides a network interface for the finger program.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'flex',
        [
        ],
        'Generate programs that perform pattern-matching on text.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'fmt',
        [
        ],
        'Used to convert text to a specified width by filling lines and removing new lines, displaying the output.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'fold',
        [
        ],
        'Wrap input line to fit in a specified width.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'for',
        [
        ],
        'Expand words and run commands for each one in the resultant list.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'formail',
        [
        ],
        'Used to filter standard input into mailbox format.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'format',
        [
        ],
        'Used to format disks.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'free',
        [
        ],
        'Show free and used system memory.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'fsck',
        [
        ],
        'Check and repair a Linux file system',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'ftp',
        [
        ],
        'File transfer protocol user interface.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'ftpd',
        [
        ],
        'FTP server process.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'function',
        [
        ],
        'Used to define function macros.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'fuser',
        [
        ],
        'Find and kill a process accessing a file.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'g++',
        [
        ],
        'Run the g++ compiler.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'gawk',
        [
        ],
        'Used for pattern scanning and language processing. A GNU implementation of AWK language.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'gcc',
        [
        ],
        'A C and C++ compiler by GNU.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'gdb',
        [
        ],
        'A utility to debug programs and know about where it crashes.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'getent',
        [
        ],
        'Shows entries from Name Service Switch Libraries for specified keys.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'getkeycodes',
        [
        ],
        'Displays the kernel scancode-to-keycode mapping table.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'getopts',
        [
        ],
        'A utility to parse positional parameters.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'gpasswd',
        [
        ],
        'Allows an administrator to change group passwords.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'gpg',
        [
        ],
        'Enables encryption and signing services as per the OpenPGP standard.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'gpgsplit',
        [
        ],
        'Used to split an OpenPGP message into packets.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'gpgv',
        [
        ],
        'Used to verify OpenPGP signatures.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'gpm',
        [
        ],
        'It enables cut and paste functionality and a mouse server for the Linux console.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'gprof',
        [
        ],
        'Shows call graph profile data.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'grep',
        [
        ],
        'Searches input files for a given pattern and displays the relevant lines.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'groff',
        [
        ],
        'Serves as the front-end of the groff document formatting system.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'groffer',
        [
        ],
        'Displays groff files and man pages.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'groupadd',
        [
        ],
        'Used to add a new user group.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'groupdel',
        [
        ],
        'Used to remove a user group.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'groupmod',
        [
        ],
        'Used to modify a group definition.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'groups',
        [
        ],
        'Showthe group(s) to which a user belongs.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'grpck',
        [
        ],
        'Verifies the integrity of group files.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'grpconv',
        [
        ],
        'Creates agshadow file from a group or an already existing gshadow.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'gs',
        [
        ],
        'Invokes Ghostscript, and interpreter and previewer for Adobe\'s PostScript and PDF languages.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'gunzip',
        [
        ],
        'A utility to compress/expand files.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'gzexe',
        [
        ],
        'Used compress executable files in place and have them automatically uncompress and run at a later stage.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'gzip',
        [
        ],
        'Same as gzip.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'halt',
        [
        ],
        'Command used to half the machine.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'hash',
        [
        ],
        'Shows the path for the commands executed in the shell.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'hdparm',
        [
        ],
        'Show/configure parameters for SATA/IDE devices.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'head',
        [
        ],
        'Shows first 10 lines from each specified file.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'help',
        [
        ],
        'Display\'s help for a built-in command.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'hexdump',
        [
        ],
        'Shows specified file output in hexadecimal, octal, decimal, or ASCII format.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'history',
        [
        ],
        'Shows the command history.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'host',
        [
        ],
        'A utility to perform DNS lookups.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'hostid',
        [
        ],
        'Shows host\'s numeric ID in hexadecimal format.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'hostname',
        [
        ],
        'Display/set the hostname of the system.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'htdigest',
        [
        ],
        'Manage the user authentication file used by the Apache web server.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'htop',
        [
        ],
        'An interactive process viewer for the command line.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'hwclock',
        [
        ],
        'Show or configure the system\'s hardware clock.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'iconv',
        [
        ],
        'Convert text file from one encoding to another.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'id',
        [
        ],
        'Show user and group information for a specified user.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'if',
        [
        ],
        'Execute a command conditionally.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'ifconfig',
        [
        ],
        'Used to configure network interfaces.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'ifdown',
        [
        ],
        'Stops a network interface.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'ifup',
        [
        ],
        'Starts a network interface.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'imapd',
        [
        ],
        'An IMAP (Interactive Mail Access Protocol) server daemon.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'import',
        [
        ],
        'Capture an X server screen and saves it as an image.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'inetd',
        [
        ],
        'Extended internet services daemon, it starts the programs that provide internet services.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'info',
        [
        ],
        'Used to read the documentation in Info format.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'init',
        [
        ],
        'Systemd system and service manager.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'insmod',
        [
        ],
        'A program that inserts a module into the Linux kernel.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'install',
        [
        ],
        'Used to copy files to specified locations and set attributions during the install process.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'iostat',
        [
        ],
        'Shows statistics for CPU, I/O devices, partitions, network filesystems.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'ip',
        [
        ],
        'Display/manipulate routing, devices, policy, routing and tunnels.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'ipcrm',
        [
        ],
        'Used to remove System V interprocess communication (IPC) objects and associated data structures.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'ipcs',
        [
        ],
        'Show information on IPC facilities for which calling process has read access.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'iptables',
        [
        ],
        'Administration tool for IPv4 packet filtering and NAT.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'iptables-restore',
        [
        ],
        'Used to restore IP tables from data specified in the input or a file.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'iptables-save',
        [
        ],
        'Used to dump IP table contents to standard output.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'isodump',
        [
        ],
        'A utility that shows the content iso9660 images to verify the integrity of directory contents.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'isoinfo',
        [
        ],
        'A utility to perform directory like listings of iso9660 images.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'isosize',
        [
        ],
        'Show the length of an iso9660 filesystem contained in a specified file.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'isovfy',
        [
        ],
        'Verifies the integrity of an iso9660 image.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'ispell',
        [
        ],
        'A CLI-based spell-check utility.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'jobs',
        [
        ],
        'Show the list of active jobs and their status.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'join',
        [
        ],
        'For each pair of input lines, join them using a command field and display on standard output.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'kbd_mode',
        [
        ],
        'Set a keyboard mode. Without arguments, shows the current keyboard mode.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'kbdrate',
        [
        ],
        'Reset keyboard repeat rate and delay time.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'kill',
        [
        ],
        'Send a kill (termination) signal to one more processes.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'killall',
        [
        ],
        'Kills a process(es) running a specified command.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'killall5',
        [
        ],
        'A SystemV killall command. Kills all the processes excluding the ones which it depends on.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'klogd',
        [
        ],
        'Control and prioritize the kernel messages to be displayed on the console, and log them through syslogd.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'kudzu',
        [
        ],
        'Used to detect new and enhanced hardware by comparing it with existing database. Only for RHEL and derivates.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'last',
        [
        ],
        'Shows a list of recent logins on the system by fetching data from <em>/var/log/wtmp</em> file.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'lastb',
        [
        ],
        'Shows the list of bad login attempts by fetching data from <em>/var/log/btmp</em>file.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'lastlog',
        [
        ],
        'Displays information about the most recent login of all users or a specified user.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'ld',
        [
        ],
        'The Unix linker, it combines archives and object files. It then puts them into one output file, resolving external references.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'ldconfig',
        [
        ],
        'Configure dynamic linker run-time bindings.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'ldd',
        [
        ],
        'Shows shared object dependencies.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'less',
        [
        ],
        'Displays contents of a fileone page at a time. It\'s advanced than <em>more</em> command.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'lesskey',
        [
        ],
        'Used to specify key bindings for less command.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'let',
        [
        ],
        'Used to perform integer artithmetic on shell variables.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'lftp',
        [
        ],
        'An FTP utility with extra features.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'lftpget',
        [
        ],
        'Uses lftop to retrieve HTTP, FTP, and other protocol URLs supported by lftp.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'link',
        [
        ],
        'Create links between two files. Similar to ln command.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'ln',
        [
        ],
        'Create links between files. Links can be hard (two names for the same file) or soft (a shortcut of the first file).',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'loadkeys',
        [
        ],
        'Load keyboard translation tables.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'local',
        [
        ],
        'Used to create function variables.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'locale',
        [
        ],
        'Shows information about current or all locales.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'locate',
        [
        ],
        'Used to find files by their name.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'lockfile',
        [
        ],
        'Create semaphore file(s) which can beused to limit access to a file.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'logger',
        [
        ],
        'Make entries in the system log.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'login',
        [
        ],
        'Create a new session on the system.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'logname',
        [
        ],
        'Shows the login name of the current user.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'logout',
        [
        ],
        'Performs the logout operation by making changes to the utmp and wtmp files.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'logrotate',
        [
        ],
        'Used for automatic rotation, compression, removal, and mailing of system log files.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'look',
        [
        ],
        'Shows any lines in a file containing a given string in the beginning.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'losetup',
        [
        ],
        'Set up and control loop devices.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'lpadmin',
        [
        ],
        'Used to configure printer and class queues provided by CUPS (Common UNIX Printing System).',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'lpc',
        [
        ],
        'Line printer control program, it provides limited control over CUPS printer and class queues.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'lpinfo',
        [
        ],
        'Shows the list of avaiable devices and drivers known to the CUPS server.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'lpmove',
        [
        ],
        'Move on or more printing jobs to a new destination.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'lpq',
        [
        ],
        'Shows current print queue status for a specified printer.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'lpr',
        [
        ],
        'Used to submit files for printing.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'lprint',
        [
        ],
        'Used to print a file.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'lprintd',
        [
        ],
        'Used to abort a print job.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'lprintq',
        [
        ],
        'List the print queue.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'lprm',
        [
        ],
        'Cancel print jobs.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'lpstat',
        [
        ],
        'Displays status information about current classes, jobs, and printers.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'ls',
        [
        ],
        'Shows the list of files in the current directory.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'lsattr',
        [
        ],
        'Shows file attributes on a Linux ext2 file system.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'lsblk',
        [
        ],
        'Lists information about all available or the specified block devices.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'lsmod',
        [
        ],
        'Show the status of modules in the Linux kernel.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'lsof',
        [
        ],
        'List open files.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'lspci',
        [
        ],
        'List all PCI devices.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'lsusb',
        [
        ],
        'List USB devices.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'm4',
        [
        ],
        'Macro processor.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'mail',
        [
        ],
        'Utility to compose, receive, send, forward, and reply to emails.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'mailq',
        [
        ],
        'Shows to list all emails queued for delivery (sendmail queue).',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'mailstats',
        [
        ],
        'Shows current mail statistics.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'mailto',
        [
        ],
        'Used to send mail with multimedia content in MIME format.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'make',
        [
        ],
        'Utility to maintain groups of programs, recompile them if needed.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'makedbm',
        [
        ],
        'Creates an NIS (Network Information Services) database map.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'makemap',
        [
        ],
        'Creates database maps used by the keyed map lookups in sendmail.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'man',
        [
        ],
        'Shows manual pages for Linux commands.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'manpath',
        [
        ],
        'Determine search path for manual pages.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'mattrib',
        [
        ],
        'Used to change MS-DOS file attribute flags.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'mbadblocks',
        [
        ],
        'Checks MD-DOS filesystems for bad blocks.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'mcat',
        [
        ],
        'Dump raw disk image.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'mcd',
        [
        ],
        'Used to change MS-DOS directory.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'mcopy',
        [
        ],
        'Used to copy MS-DOS files from or to Unix.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'md5sum',
        [
        ],
        'Used to check MD5 checksum for a file.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'mdel, mdeltree',
        [
        ],
        'Used to delete MS-DOS file. mdeltree recursively deletes MS-DOS directory and its contents.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'mdir',
        [
        ],
        'Used to display an MS-DOS directory.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'mdu',
        [
        ],
        'Used to display the amount of space occupied by an MS-DOS directory.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'merge',
        [
        ],
        'Three-way file merge. Includes all changes from file2 and file3 to file1.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'mesg',
        [
        ],
        'Allow/disallow osends to sedn write messages to your terminal.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'metamail',
        [
        ],
        'For sending and showing rich text or multimedia email using MIME typing metadata.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'metasend',
        [
        ],
        'An interface for sending non-text mail.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'mformat',
        [
        ],
        'Used to add an MS-DOS filesystem to a low-level formatted floppy disk.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'mimencode',
        [
        ],
        'Translate to/from MIME multimedia mail encoding formats.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'minfo',
        [
        ],
        'Display parameters of an MS-DOS filesystem.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'mkdir',
        [
        ],
        'Used to create directories.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'mkdosfs',
        [
        ],
        'Used to create an MS-DOS filesystem under Linux.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'mke2fs',
        [
        ],
        'Used create an ext2/ext3/ext4 filesystem.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'mkfifo',
        [
        ],
        'Used to create named pipes (FIFOs) with the given names.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'mkfs',
        [
        ],
        'Used to build a Linux filesystem on a hard disk partition.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        '<span class="skimlinks-unlinked">mkfs.ext3</span>',
        [
        ],
        'Same as mke2fs, create an ext3 Linux filesystem.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'mkisofs',
        [
        ],
        'Used to create an ISO9660/JOLIET/HFS hybrid filesystem.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'mklost+found',
        [
        ],
        'Create a lost+found directory on a mounted ext2 filesystem.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'mkmanifest',
        [
        ],
        'Makes alist of file names and their DOS 8.3 equivalent.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'mknod',
        [
        ],
        'Create a FIFO, block (buffered) special file, character (unbuffered) special file with the specified name.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'mkraid',
        [
        ],
        'Used to setup RAID device arrays.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'mkswap',
        [
        ],
        'Set up a Linux swap area.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'mktemp',
        [
        ],
        'Create a temporary file or directory.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'mlabel',
        [
        ],
        'Make an MD-DOS volume label.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'mmd',
        [
        ],
        'Make an MS-DOS subdirectory.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'mmount',
        [
        ],
        'Mount an MS-DOS disk.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'mmove',
        [
        ],
        'Move or rename an MS-DOS file or subdirectory.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'mmv',
        [
        ],
        'Mass move and rename files.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'modinfo',
        [
        ],
        'Show information about a Linux kernel module.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'modprobe',
        [
        ],
        'Add or remove modules from the Linux kernel.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'more',
        [
        ],
        'Display content of a file page-by-page.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'most',
        [
        ],
        'Browse or page through a text file.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'mount',
        [
        ],
        'Mount a filesystem.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'mountd',
        [
        ],
        'NFS mount daemon.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'mpartition',
        [
        ],
        'Partition an MS-DOS disk.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'mpg123',
        [
        ],
        'Command-line mp3 player.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'mpg321',
        [
        ],
        'Similar to mpg123.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'mrd',
        [
        ],
        'Remove an MS-DOS subdirectory.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'mren',
        [
        ],
        'Rename an existing MS-DOS file.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'mshowfat',
        [
        ],
        'Show FTA clusters allocated to a file.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'mt',
        [
        ],
        'Control magnetic tape drive operation.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'mtools',
        [
        ],
        'Utilities to access MS-DOS disks.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'mtoolstest',
        [
        ],
        'Tests and displays the mtools configuration files.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'mtr',
        [
        ],
        'A network diagnostic tool.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'mtype',
        [
        ],
        'Display contents of an MS-DOS file.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'mv',
        [
        ],
        'Move/rename files or directories.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'mzip',
        [
        ],
        'Change protection mode and eject disk on Zip/Jaz drive.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'named',
        [
        ],
        'Internet domain name server.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'namei',
        [
        ],
        'Follow a pathname until a terminal point is found.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'nameif',
        [
        ],
        'Name network interfaces based on MAC addresses.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'nc',
        [
        ],
        'Netcat utility. Arbitrary TCP and UDP connections and listens.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'netstat',
        [
        ],
        'Show network information.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'newaliases',
        [
        ],
        'Rebuilds mail alias database.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'newgrp',
        [
        ],
        'Log-in to a new group.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'newusers',
        [
        ],
        'Update/create new users in batch.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'nfsd',
        [
        ],
        'Special filesystem for controlling Linux NFS server.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'nfsstat',
        [
        ],
        'List NFS statistics.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'nice',
        [
        ],
        'Run a program with modified scheduling priority.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'nl',
        [
        ],
        'Show numbered line while displaying the contents of a file.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'nm',
        [
        ],
        'List symbols from object files.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'nohup',
        [
        ],
        'Run a command immune to hangups.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'notify-send',
        [
        ],
        'A program to send desktop notifications.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'nslookup',
        [
        ],
        'Used performs DNS queries. Read this article for more info.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'nsupdate',
        [
        ],
        'Dynamic DNS update utility.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'objcopy',
        [
        ],
        'Copy and translate object files.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'objdump',
        [
        ],
        'Display information from object files.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'od',
        [
        ],
        'Dump files in octal and other formats.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'op',
        [
        ],
        'Operator access, allows system administrators to grant users access to certain rootoperations that require superuser privileges.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'open',
        [
        ],
        'Open a file using its default application.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'openvt',
        [
        ],
        'Start a program on a new virtual terminal (VT).',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'passwd',
        [
        ],
        'Change user password.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'paste',
        [
        ],
        'Merge lines of files. Write to standard output, TAB-separated lines consisting of sqentially correspnding lines from each file.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'patch',
        [
        ],
        'Apply a patchfile (containing differences listing by diff program) to an original file.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'pathchk',
        [
        ],
        'Check if file names are valid or portable.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'perl',
        [
        ],
        'Perl 5 language interpreter.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'pgrep',
        [
        ],
        'List process IDs matching the specified criteria among all the running processes.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'pidof',
        [
        ],
        'Find process ID of a running program.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'ping',
        [
        ],
        'Send ICMP ECHO_REQUEST to network hosts.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'pinky',
        [
        ],
        'Lightweight finger.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'pkill',
        [
        ],
        'Send kill signal to processes based on name and other attributes.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'pmap',
        [
        ],
        'Report memory map of a process.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'popd',
        [
        ],
        'Removes directory on the head of the directory stack and takes you to the new directory on the head.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'portmap',
        [
        ],
        'Converts RPC program numbers to IP port numbers.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'poweroff',
        [
        ],
        'Shuts down the machine.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'pppd',
        [
        ],
        'Point-to-point protocol daemon.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'pr',
        [
        ],
        'Convert (column or paginate) text files for printing.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'praliases',
        [
        ],
        'Prints the current system mail aliases.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'printcap',
        [
        ],
        'Printer capability database.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'printenv',
        [
        ],
        'Show values of all or specified environment variables.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'printf',
        [
        ],
        'Show arguments formatted according to a specified format.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'ps',
        [
        ],
        'Report a snapshot of the current processes.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'ptx',
        [
        ],
        'Produce a permuted index of file contents.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'pushd',
        [
        ],
        'Appends a given directory name to the head of the stack and then cd to the given directory.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'pv',
        [
        ],
        'Monitor progress of data through a pipe.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'pwck',
        [
        ],
        'Verify integrity of password files.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'pwconv',
        [
        ],
        'Creates shadow from passwdand an optionally existing shadow.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'pwd',
        [
        ],
        'Show current directory.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'python',
        [
        ],
        '',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'quota',
        [
        ],
        'Shows disk usage, and space limits for a user or group. Without arguments, only shows user quotas.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'quotacheck',
        [
        ],
        'Used to scan a file system for disk usage.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'quotactl',
        [
        ],
        'Make changes to disk quotas.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'quotaoff',
        [
        ],
        'Enable enforcement of filesystem quotas.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'quotaon',
        [
        ],
        'Disable enforcement of filesystem quotas.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'quotastats',
        [
        ],
        'Shows the report of quota system statistics gathered from the kernel.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'raidstart',
        [
        ],
        'Start/stop RAID devices.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'ram',
        [
        ],
        'RAM disk device used to access the RAM disk in raw mode.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'ramsize',
        [
        ],
        'Show usage information for the RAM disk.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'ranlib',
        [
        ],
        'Generate index to the contents of an archive and store it in the archive.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'rar',
        [
        ],
        'Create and manage RAR file in Linux.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'rarpd',
        [
        ],
        'Respond to Reverse Address Resoultion Protocol (RARP) requests.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'rcp',
        [
        ],
        'Remote copy command to copy files between remote computers.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'rdate',
        [
        ],
        'Set system date and time by fetching information from a remote machine.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'rdev',
        [
        ],
        'Set or query RAM disk size, image root device, or video mode.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'rdist',
        [
        ],
        'Remote file distribution client, maintains identical file copies over multiple hosts.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'rdistd',
        [
        ],
        'Start the rdist server.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'read',
        [
        ],
        'Read from a file descriptor.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'readarray',
        [
        ],
        'Read lines from a file into an array variable.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'readcd',
        [
        ],
        'Read/write compact disks.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'readelf',
        [
        ],
        'Shows information about ELF (Executable and Linkable fomrat) files.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'readlink',
        [
        ],
        'Display value of a symbolic link or canonical file name.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'readonly',
        [
        ],
        'Mark functions and variables as read-only.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'reboot',
        [
        ],
        'Restart the machine.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'reject',
        [
        ],
        'Accept/reject print jobs sent to a specified destination.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'remsync',
        [
        ],
        'Synchronize remote files over email.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'rename',
        [
        ],
        'Rename one or more files.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'renice',
        [
        ],
        'Change priority of active processes.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'repquota',
        [
        ],
        'Report disk usage and quotas for a specified filesystem.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'reset',
        [
        ],
        'Reinitialize the terminal.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'resize2fs',
        [
        ],
        'Used to resize ext2/ext3/ext4 file systems.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'restore',
        [
        ],
        'Restore files from a backup created using dump.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'return',
        [
        ],
        'Exit a shell function.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'rev',
        [
        ],
        'Show contents of a file, reversing the order of characters in every line.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'rexec',
        [
        ],
        'Remote execution client for exec server.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'rexecd',
        [
        ],
        'Remote execution server.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'richtext',
        [
        ],
        'View ôrichtextö on an ACSII terminal.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'rlogin',
        [
        ],
        'Used to connect a local host system with a remote host.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'rlogind',
        [
        ],
        'Acts as the server for rlogin.It facilitates remote login, and authentication based on privileged port numbers from trusted hosts.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'rm',
        [
        ],
        'Removes specified files and directories (not by default).',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'rmail',
        [
        ],
        'Handle remote mail received via uucp.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'rmdir',
        [
        ],
        'Used to remove empty directories.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'rmmod',
        [
        ],
        'A program to remove modules from Linux kernel.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'rndc',
        [
        ],
        'Name server control utility. Send command to a BIND DNS server over a TCP connection.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'rootflags',
        [
        ],
        'Show/set flags for the kernel image.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'route',
        [
        ],
        'Show/change IP routing table.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'routed',
        [
        ],
        'A daemon, invoked at boot time, to manage internet routing tables.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'rpcgen',
        [
        ],
        'An RPC protocol compiler. Parse a file written in the RPC language.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'rpcinfo',
        [
        ],
        'Shows RPC information. Makes an RPC call to an RPC server and reports the findings.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'rpm',
        [
        ],
        'A package manager for linux distributions. Originally developed for RedHat Linux.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'rsh',
        [
        ],
        'Remote shell. Connects to a specified host and executes commands.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'rshd',
        [
        ],
        'A daemon that acts as a server for rsh and rcp commands.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'rsync',
        [
        ],
        'A versitile to for copying files remotely and locally.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'runlevel',
        [
        ],
        'Shows previous and current SysV runlevel.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'rup',
        [
        ],
        'Remote status display. Shows current system status for all or specified hosts on the local network.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'ruptime',
        [
        ],
        'Shows uptime and login details of the machines on the local network.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'rusers',
        [
        ],
        'Shows the list of the users logged-in to the host or on all machines on the local network.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'rusersd',
        [
        ],
        'The rsuerd daemon acts as a server that responds to the queries from rsuers command.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'rwall',
        [
        ],
        'Sends messages to all users on the local network.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'rwho',
        [
        ],
        'Reports who is logged-in to the hosts on the local network.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'rwhod',
        [
        ],
        'Acts as a server for rwho and ruptime commands.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'sane-find-scanner',
        [
        ],
        'Find SCSI and USB scanner and determine their device files.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'scanadf',
        [
        ],
        'Retrieve multiple images from a scanner equipped with an automatic document feeder (ADF).',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'scanimage',
        [
        ],
        'Read images from image aquistion devices (scanner or camera) and display on standard output in PNM (Portable aNyMap) format.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'scp',
        [
        ],
        'Copy files between hosts on a network securely using SSH.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'screen',
        [
        ],
        'A window manager that enables multiple pseudo-terminals with the help of ANSI/VT100 terminal emulation.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'script',
        [
        ],
        'Used to make a typescript of everything displayed on the screen during a terminal session.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'sdiff',
        [
        ],
        'Shows two files side-by-side and highlights the differences.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'sed',
        [
        ],
        'Stream editor for filtering and transforming text (from a file or a pipe input).',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'select',
        [
        ],
        'Synchronous I/O multiplexing.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'sendmail',
        [
        ],
        'It\'s a mail router or an MTA (Mail Transfer Agent). sendmail support can send a mail to one or more recepients using necessary protocols.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'sensors',
        [
        ],
        'Shows the current readings of all sensor chips.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'seq',
        [
        ],
        'Displays an incremental sequence of numbers from first to last.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'set',
        [
        ],
        'Used to manipulate shell variables and functions.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'setfdprm',
        [
        ],
        'Sets floppy disk parameters as provided by the user.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'setkeycodes',
        [
        ],
        'Load kernel scancode-to-keycode mapping table entries.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'setleds',
        [
        ],
        'Show/change LED light settings of the keyboard.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'setmetamode',
        [
        ],
        'Define keyboard meta key handling. Without arguments, shows current meta key mode.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'setquota',
        [
        ],
        'Set disk quotas for users and groups.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'setsid',
        [
        ],
        'Run a program in a new session.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'setterm',
        [
        ],
        'Set terminal attributes.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'sftp',
        [
        ],
        'Secure File Transfer program.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'sh',
        [
        ],
        'Command interpreter (shell) utility.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'sha1sum',
        [
        ],
        'Compute and check 160-bit SHA1 checksum to verify file integrity.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'shift',
        [
        ],
        'Shift positional parameters.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'shopt',
        [
        ],
        'Shell options.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'showkey',
        [
        ],
        'Examines codes sent by the keyboard displays them in printable form.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'showmount',
        [
        ],
        'Shows information about NFS server mount on the host.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'shred',
        [
        ],
        'Overwrite a file to hide its content (optionally delete it), making it harder to recover it.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'shutdown',
        [
        ],
        'Power-off the machine.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'size',
        [
        ],
        'Lists section size and the total size of a specified file.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'skill',
        [
        ],
        'Send a signal to processes.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'slabtop',
        [
        ],
        'Show kernel slab cache information in real-time.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'slattach',
        [
        ],
        'Attack a network interface to a serial line.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'sleep',
        [
        ],
        'Suspend execution for a specified amount of time (in seconds).',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'slocate',
        [
        ],
        'Display matches by searching filename databases. Takes ownership and file permission into consideration.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'snice',
        [
        ],
        'Reset priority for processes.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'sort',
        [
        ],
        'Sort lines of text files.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'source',
        [
        ],
        'Run commands from a specified file.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'split',
        [
        ],
        'Split a file into pieces of fixed size.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'ss',
        [
        ],
        'Display socket statistics, similar to netstat.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'ssh',
        [
        ],
        'An SSH client for logging in to a remote machine. It provides encrypted communication between the hosts.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'ssh-add',
        [
        ],
        'Adds private key identities to the authentication agent.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'ssh-agent',
        [
        ],
        'It holds private keys used for public key authentication.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'ssh-keygen',
        [
        ],
        'It generates, manages, converts authentication keys for ssh.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'ssh-keyscan',
        [
        ],
        'Gather ssh public keys.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'sshd',
        [
        ],
        'Server for the ssh program.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'stat',
        [
        ],
        'Display file or filesystem status.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'statd',
        [
        ],
        'A daemon that listens for reboot notifications from other hosts, and manages the list of hosts to be notified when the local system reboots.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'strace',
        [
        ],
        'Trace system calls and signals.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'strfile',
        [
        ],
        'Create a random access file for storing strings.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'strings',
        [
        ],
        'Search a specified file and prints any printable strings with at least four characters and followed by an unprintable character.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'strip',
        [
        ],
        'Discard symbols from object files.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'stty',
        [
        ],
        'Change and print terminal line settings.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'su',
        [
        ],
        'Change user ID or become superuser.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'sudo',
        [
        ],
        'Execute a command as superuser.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'sum',
        [
        ],
        'Checksum and count the block in a file.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'suspend',
        [
        ],
        'Suspend the execution of the current shell.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'swapoff',
        [
        ],
        'Disable devices for paging and swapping.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'swapon',
        [
        ],
        'Enable devices for paging and swapping.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'symlink',
        [
        ],
        'Create a symbolic link to a file.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'sync',
        [
        ],
        'Synchronize cached writes to persistent storage.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'sysctl',
        [
        ],
        'Configure kernel parameters at runtime.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'sysklogd',
        [
        ],
        'Linux system logging utilities. Provides syslogd and klogd functionalities.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'syslogd',
        [
        ],
        'Read and log system messages to the system console and log files.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'tac',
        [
        ],
        'Concatenate and print files in reverse order. Opposite of cat command.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'tail',
        [
        ],
        'Show the last 10 lines of each specified file(s).',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'tailf',
        [
        ],
        'Follow the growth of a log file. (Deprecated command)',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'talk',
        [
        ],
        'A two-way screen-oriented communication utility that allows two user to exchange messages simulateneously.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'talkd',
        [
        ],
        'A remote user communication server for <em>talk</em>.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'tar',
        [
        ],
        'GNU version of the tar archiving utility. Used to store and extract multiple files from a single archive.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'taskset',
        [
        ],
        'Set/retrieve a process\'s CPU affinity.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'tcpd',
        [
        ],
        'Access control utility for internet services.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'tcpdump',
        [
        ],
        'Dump traffic on network. Displays a description of the contents of packets on a network interface that match the boolean expression.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'tcpslice',
        [
        ],
        'Extract pieces of tcpdump files or merge them.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'tee',
        [
        ],
        'Read from standard input and write to standard output and files.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'telinit',
        [
        ],
        'Change SysV runlevel.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'telnet',
        [
        ],
        'Telnet protocol user interface. Used to interact with another host using telnet.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'telnetd',
        [
        ],
        'A server for the telnet protocol.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'test',
        [
        ],
        'Check file type and compare values.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'tftp',
        [
        ],
        'User interface to the internet TFTP (Trivial File Transfer Protocol).',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'tftpd',
        [
        ],
        'TFTP server.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'time',
        [
        ],
        'Run programs and summarize system resource usage.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'timeout',
        [
        ],
        'Execute a command with a time limit.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'times',
        [
        ],
        'Shows accumulated user and system times for the shell and it\'s child processes.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'tload',
        [
        ],
        'Shows a graph of the current system load average to the specified tty.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'tmpwatch',
        [
        ],
        'Recursively remove files and directories which haven\'t been accessed for the specified period of time.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'top',
        [
        ],
        'Displays real-time view of processes running on the system.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'touch',
        [
        ],
        'Change file access and modification times.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'tput',
        [
        ],
        'Modify terminal-dependent capabilities, color, etc.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'tr',
        [
        ],
        'Translate, squeeze, or delete characters from standard input and display on standard output.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'tracepath',
        [
        ],
        'Traces path to a network host discovering MTU (Maximum Transmission Unit) along this path.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'traceroute',
        [
        ],
        'Traces the route taken by the packets to reach the network host.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'trap',
        [
        ],
        'Trap function responds to hardware signals. It defines and creates handlers to run when the shell receives signals.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'troff',
        [
        ],
        'The troff processor of the groff text formatting system.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'TRUE',
        [
        ],
        'Exit with a status code indicating success.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'tset',
        [
        ],
        'Initialize terminal.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'tsort',
        [
        ],
        'Perform topological sort.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'tty',
        [
        ],
        'Display the filename of the terminal connected to standard input.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'tune2fs',
        [
        ],
        'Adjust tunable filesystem parameters on ext2/ext3/ext4 filesystems.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'tunelp',
        [
        ],
        'Set various parameters for the line printer devices.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'type',
        [
        ],
        'Write a description for a command type.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'ul',
        [
        ],
        'Underline text.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'ulimit',
        [
        ],
        'Get and set user limits for the calling process.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'umask',
        [
        ],
        'Set file mode creation mask.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'umount',
        [
        ],
        'Unmount specified file systems.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'unalias',
        [
        ],
        'Remove alias definitions for specified alias names.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'uname',
        [
        ],
        'Show system information.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'uncompress',
        [
        ],
        'Uncompress the files compressed with the compress command.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'unexpand',
        [
        ],
        'Convert spaces to tabs for a specified file.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'unicode_start',
        [
        ],
        'Put keyboard and console in Unicode mode.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'unicode_stop',
        [
        ],
        'Revert keyboard and console from Unicode mode.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'uniq',
        [
        ],
        'Report or omit repeating lines.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'units',
        [
        ],
        'Convert units from one scalar to another.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'unrar',
        [
        ],
        'Extract files from a RAR archive.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'unset',
        [
        ],
        'Remove variable or function names.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'unshar',
        [
        ],
        'Unpack shell archive scripts.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'until',
        [
        ],
        'Execute command until a given condition is true.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'uptime',
        [
        ],
        'Tell how long the system has been running.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'useradd',
        [
        ],
        'Create a new user or update default user information.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'userdel',
        [
        ],
        'Delete a user account and related files.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'usermod',
        [
        ],
        'Modify a user account.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'users',
        [
        ],
        'Show the list of active users on the machine.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'usleep',
        [
        ],
        'Suspend execution for microsecond intervals.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'uudecode',
        [
        ],
        'Decode a binary file.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'uuencode',
        [
        ],
        'Encode a binary file.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'uuidgen',
        [
        ],
        'Created a new UUID (Universally Unique Identifier) table.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'vdir',
        [
        ],
        'Same as <strong>ls -l -b</strong>. Verbosely list directory contents.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'vi',
        [
        ],
        'A text editor utility.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'vidmode',
        [
        ],
        'Set the video mode for a kernel image. Displays current mode value without arguments. Alternative: rdev -v',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'vim',
        [
        ],
        'Vi Improved, a text-based editor which is a successor to vi.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'vmstat',
        [
        ],
        'Shows information about processes, memory, paging, block IO, traps, disks, and CPU activity.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'volname',
        [
        ],
        'Returns volume name for a device formatted with an ISO-9660 filesystem. For example, CD-ROM.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'w',
        [
        ],
        'Show who is logged-on and what they\'re doing.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'wait',
        [
        ],
        'Waits for a specified process ID(s) to terminate and returns the termination status.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'wall',
        [
        ],
        'Display a message on the terminals all the users who are currently logged-in.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'warnquota',
        [
        ],
        'Send mail to the users who\'ve exceeded their disk quota soft limit.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'watch',
        [
        ],
        'Runs commands repeatedly until interrupted and shows their output and errors.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'wc',
        [
        ],
        'Print newline, word, and byte count for each of the specified files.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'wget',
        [
        ],
        'A non-interactive file download utility.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'whatis',
        [
        ],
        'Display one line manual page descriptions.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'whereis',
        [
        ],
        'Locate the binary, source, and man page files for a command.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'which',
        [
        ],
        'For a given command, lists the pathnames for the files which would be executed when the command runs.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'while',
        [
        ],
        'Conditionally execute commands (while loop).',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'who',
        [
        ],
        'Shows who is logged on.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'whoami',
        [
        ],
        'Displays the username tied to the current effective user ID.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'whois',
        [
        ],
        'Looks for an object in a WHOIS database',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'write',
        [
        ],
        'Display a message on other user\'s terminal.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'xargs',
        [
        ],
        'Runs a command using initial arguments and then reads remaining arguments from standard input.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'xdg-open',
        [
        ],
        'Used to open a file or URL in an application preferred by the user.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'xinetd',
        [
        ],
        'Extended internet services daemon. Works similar to inetd.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'xz',
        [
        ],
        'Compress/ Decompress .xz and .lzma files.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'yacc',
        [
        ],
        'Yet Another Compiler Compiler, a GNU Project parser generator.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'yes',
        [
        ],
        'Repeatedly output a line with a specified string(s) until killed.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'ypbind',
        [
        ],
        'A daemon that helps client processes to connect to an NIS server.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'ypcat',
        [
        ],
        'Shows the NIS map (or database) for the specified MapName parameter.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'ypinit',
        [
        ],
        'Sets up NIS maps on an NIS server.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'ypmatch',
        [
        ],
        'Shows values for specified keys from an NIS map.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'yppasswd',
        [
        ],
        'Change NIS login password.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'yppasswdd',
        [
        ],
        'Acts as a server for the yppasswd command. Receives and executes requests.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'yppoll',
        [
        ],
        'Shows the ID number or version of NIS map currently used on the NIS server.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'yppush',
        [
        ],
        'Forces slave NIS servers to copy updated NIS maps.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'ypserv',
        [
        ],
        'A daemon activated at system startup. It looks for information in local NIS maps.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'ypset',
        [
        ],
        'Point a client (running ypbind) to a specifc server (running ypserv).',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'yptest',
        [
        ],
        'Calls various functions to check the configuration of NIS services.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'ypwhich',
        [
        ],
        'Shows the hostname for NIS server or master server for a given map.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'ypxfr',
        [
        ],
        'Transfers NIS server map from server to a local host.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'zcat',
        [
        ],
        'Used to compress/uncompress files. Similar to gzip',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'zcmp',
        [
        ],
        'Compare compressed files.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'zdiff',
        [
        ],
        'Compare compressed files line by line.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'zdump',
        [
        ],
        'Displays time for the timezone mentioned.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'zforce',
        [
        ],
        'Adds .gz extension to all gzipped files.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'zgrep',
        [
        ],
        'Performs grep on compressed files.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'zic',
        [
        ],
        'Creates time conversion information files using the specified input files.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'zip',
        [
        ],
        'A file compression and packaging utility.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'zless',
        [
        ],
        'Displays information of a compressed file (using less command) on the terminal one screen at a time.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'zmore',
        [
        ],
        'Displays output of a compressed file (using more command) on the terminal one page at a time.',
        '',
        '',
        () => { }
    ),


    new ConsoleCommand(
        'znew',
        [
        ],
        'Recompress .z files to .gz. files.',
        '',
        '',
        () => { }
    )
]

export const BashCommands = commands;