import { spawn } from 'child_process';
import path from 'path';

// Execute Python script
export async function LaunchPythonProcess(process: string) {
    const pythonProcess = spawn(path.join(__dirname, `../../dist/modules/${process}0.0.1/${process}`));

    // Handle output from Python script
    pythonProcess.stdout.on('data', (data: any) => {
        console.log(`stdout: ${data}`);
    });

    // Handle errors from Python script
    pythonProcess.stderr.on('data', (data: any) => {
        console.error(`stderr: ${data}`);
    });

    // Handle Python script exit
    pythonProcess.on('close', (code: any) => {
        console.log(`Python process exited with code ${code}`);
    });
}