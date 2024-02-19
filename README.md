# Easy to use Firebase Emulator setup

Project provides Docker container to run Firebase Emulator locally.

Currently supported features:

- Firebase Auth
- Firebase Database
- Firestore
- Functions
- Hosting

# Usage

## Install Requirements

```bash
cd project
npm i

cd functions
npm i
```

## Build and Run

```bash
docker compose up
```

By default it will:

- run Emulator UI at http://localhost:4000/
- run Cloud Functions http://localhost:5001/
- run Firestore at http://localhost:8080/
- run Realtime Database at http://localhost:9000/
- run Firebase Auth at http://localhost:9099/
- run Firebase Hosting at http://localhost:5000/
- use `demo-project` as project ID

# Configuration

Configuration is done by updating values in:

- `project/firebase.json`
- `serve.sh`

## Testing

Before running the test scripts in `package.json`, create a `project/coverage/` directory (functions test will fail without it).

# Firebase (optional)

Get building with Firebase by following the official docs - [https://firebase.google.com/docs/build](https://firebase.google.com/docs/build)

## Init project

If you have an existing firebase project, you may want to import rules & dataset
first.

To do so, you need to have [firebase tool][1] to be installed.

First, `cd` into the project directory.

Then, init project by using your existing remote Firebase project:

```bash
firebase list
firebase --project <project-id>
```

[1]: https://github.com/firebase/firebase-tools
