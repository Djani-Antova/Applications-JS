

function running() {
    return 'Running'
}

function category(run, type) {
    console.log(run() + ' ' + type);
}

category(running, 'sprint')