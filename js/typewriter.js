var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Digital Marketer')
    .pauseFor(500)
    .deleteAll()
    .typeString('Wed Desiner')
    .pauseFor(500)
    .deleteAll()
    .typeString('Project Manager')
    .pauseFor(500)
    .deleteAll()
    .start();
