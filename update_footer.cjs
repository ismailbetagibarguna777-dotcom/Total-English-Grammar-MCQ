const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// Replace login footer
const loginFooterSearch = `<div class="login-footer">
            <div class="login-footer-content">
                <div class="login-footer-text">Developed by</div>
                <div class="login-footer-name">Ismail Hossain</div>
                <div class="login-footer-qualifications">App Developer</div>
            </div>
        </div>`;

const loginFooterReplace = `<div class="login-footer">
            <div class="login-footer-content" style="max-width: 800px; margin: 0 auto; padding: 25px;">
                <img src="https://i.ibb.co.com/7dn2mpv7/Whats-App-Image-2026-09-08-at-6-03-29-PM.jpg" alt="Ismail Hossain" style="width: 100px; height: 100px; border-radius: 50%; object-fit: cover; border: 3px solid rgba(245, 158, 11, 0.6); box-shadow: 0 4px 15px rgba(245, 158, 11, 0.3); margin-bottom: 15px;">
                <div class="login-footer-text" style="font-size: 0.95rem; line-height: 1.6; color: #e2e8f0;">
                    The page is designed and developed by <strong style="color: #f59e0b; font-size: 1.1rem;">Md. Ismail Hossain</strong>.<br>
                    Assistant Teacher, Uttar Deshanterkathi GPS.<br>
                    B.A. (Hons) B.Ed. M.A. in English.<br>
                    Specially trained under British Council in Bangladesh for Master Trainer of English of Primary education, Betagi Upazilla, Barguna<br>
                    Mobile: 01728-295215 | E-mail: ismailhossain627@yahoo.com.
                </div>
            </div>
        </div>`;

if(html.includes(loginFooterSearch)) {
    html = html.replace(loginFooterSearch, loginFooterReplace);
    console.log("Login footer replaced.");
} else {
    console.log("Could not find exact login footer string. Trying regex/indexOf.");
    
    // fallback
    const start = html.indexOf('<div class="login-footer">');
    const end = html.indexOf('</div></div><div id="main-project-wrapper"', start);
    
    if (start !== -1 && end !== -1) {
        html = html.substring(0, start) + loginFooterReplace + html.substring(end);
        console.log("Login footer replaced using substring.");
    }
}


// Replace main footer
const mainFooterSearch = `<footer class="footer">
        <div class="footer-wave"></div>
        <div class="footer-content">
            <div class="footer-top">
                <img src="https://via.placeholder.com/100" class="footer-logo" alt="Logo">
                <div class="footer-title">General Knowledge Quiz</div>
                <div class="footer-subtitle">Test your knowledge and grow</div>
            </div>
        </div>
        <div class="footer-bottom">
            &copy; 2024 Ismail Hossain. All rights reserved.
        </div>
    </footer>`;

const mainFooterReplace = `<footer class="footer">
        <div class="footer-wave"></div>
        <div class="footer-content" style="max-width: 900px; margin: 0 auto; text-align: center; padding: 20px;">
            <div class="footer-top">
                <img src="https://i.ibb.co.com/7dn2mpv7/Whats-App-Image-2026-09-08-at-6-03-29-PM.jpg" class="footer-logo" alt="Md. Ismail Hossain" style="width: 120px; height: 120px; border-radius: 50%; object-fit: cover; border: 3px solid rgba(245, 158, 11, 0.6); box-shadow: 0 4px 15px rgba(245, 158, 11, 0.3); margin-bottom: 15px;">
                <div class="footer-title" style="margin-bottom: 10px;">General Knowledge Quiz</div>
                <div class="footer-subtitle" style="font-size: 1rem; color: #e2e8f0; line-height: 1.6;">
                    The page is designed and developed by <strong style="color: #f59e0b; font-size: 1.1rem;">Md. Ismail Hossain</strong>.<br>
                    Assistant Teacher, Uttar Deshanterkathi GPS.<br>
                    B.A. (Hons) B.Ed. M.A. in English.<br>
                    Specially trained under British Council in Bangladesh for Master Trainer of English of Primary education, Betagi Upazilla, Barguna<br>
                    Mobile: 01728-295215 | E-mail: ismailhossain627@yahoo.com.
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            &copy; 2026 Md. Ismail Hossain. All rights reserved.
        </div>
    </footer>`;

if(html.includes(mainFooterSearch)) {
    html = html.replace(mainFooterSearch, mainFooterReplace);
    console.log("Main footer replaced.");
} else {
    console.log("Could not find exact main footer string. Trying regex/indexOf.");
    const start = html.indexOf('<footer class="footer">');
    const end = html.indexOf('</footer>', start) + 9;
    
    if (start !== -1 && end !== -1) {
        html = html.substring(0, start) + mainFooterReplace + html.substring(end);
        console.log("Main footer replaced using substring.");
    }
}

fs.writeFileSync('index.html', html, 'utf8');
console.log("File saved.");
