const roleSpan = document.getElementById("role");
const cursorSpan = document.getElementById("cursor");
const roles = ["ESTUDIANTE", "PROGRAMADOR", "AUTODIDACTA", "TÉCNICO ELECTRÓNICO", "FULLSTACK DEV"];
let currentRoleIndex = 0;
let letterIndex = 0;
let isDeleting = false;
let isCursorVisible = true;
let delayBeforeNextRole = false;
let completedTyping = false;

function typeRole() {
    const role = roles[currentRoleIndex];
    roleSpan.textContent = role.substring(0, letterIndex);
    if (isDeleting) {
        if (letterIndex === 0) {
            if (!delayBeforeNextRole) {
                delayBeforeNextRole = true;
                setTimeout(() => {
                    delayBeforeNextRole = false;
                    isDeleting = false;
                    completedTyping = false;
                    currentRoleIndex = (currentRoleIndex + 1) % roles.length;
                }, 1000);
            }
        } else {
            letterIndex--;
        }
    } else {
        if (letterIndex === role.length) {
            completedTyping = true;
        } else {
            letterIndex++;
        }
        if (completedTyping) {
            setTimeout(() => { isDeleting = true; }, 2500);
        }
    }
}

function blinkCursor() {
    if (isCursorVisible) {
        cursorSpan.style.visibility = 'hidden';
        isCursorVisible = false;
    } else {
        cursorSpan.style.visibility = 'visible';
        isCursorVisible = true;
    }
}

setInterval(blinkCursor, 500);
setInterval(typeRole, 150);