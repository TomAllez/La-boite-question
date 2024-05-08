import { spawn } from 'child_process';

let ffmpegProcess: any

export function startAVRecording(name: string) {
    const command = [
        'ffmpeg',
        '-f', 'avfoundation',
        '-video_size', '1280x720',
        '-framerate', '30',  // Adjust as needed
        '-pixel_format', 'uyvy422',
        '-i', '0:0',
        '-c:v', 'h264',
        '-b:v', '2M',  // Adjust bitrate as needed
        '-bufsize', '64M',  // Adjust buffer size as needed
        '-c:a', 'aac',
        '-ar', '44100',  // Adjust audio sample rate as needed
        'output.mp4'
    ]


    ffmpegProcess = spawn(command[0], command.slice(1));

    // Handle stdout and stderr if needed
    ffmpegProcess.stdout.on('data', (data: any) => {
        console.log(`stdout: ${data}`);
    });

    ffmpegProcess.stderr.on('data', (data: any) => {
        console.error(`stderr: ${data}`);
    });

    ffmpegProcess.on('close', (code: any) => {
        console.log(`child process exited with code ${code}`);
    });
}

export function stopAVRecording() {
    if (ffmpegProcess) {
        ffmpegProcess.send('q'); // Send SIGINT signal to terminate the process gracefully
    } else {
        console.log('No recording in progress');
    }
}
