const childProcess = require("child_process")

const proc = childProcess.spawn(
    "pyinstaller",
    [
        "--noconsole",
        "--onefile",
        "--distpath build/dist-python",
        "web/app.py",
    ],
    {
        shell: true,
    }
);

proc.stdout.on("data", (data) => {
    process.stdout.write(data.toString());
});

proc.stderr.on("data", (data) => {
    process.stdout.write(data.toString());
});

proc.on("exit", (code) => {
    process.stdout.write("PyInstaller exited with code " + code.toString());
});
