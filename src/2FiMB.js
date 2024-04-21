/** 
 * Name: 2FiMB
 * Version: 1.0.0
 * Description: 2FiMB (Force Fullscreen in Mobile Browser) - Force your Mobile Browser to Access your favorite website in Fullscreen Mode!
 * Author: Wizzy
 * Author Website: https://iam-wizzy.web.app
 * License: MIT
 */
const FiMBbtn = document.createElement('button');
FiMBbtn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-arrows-fullscreen" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707m4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707m0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707m-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707"/>
    </svg>
`;

FiMBbtn.querySelector('svg').style.display = 'block';

FiMBbtn.style.position = 'fixed';
FiMBbtn.style.zIndex = '9999';
FiMBbtn.style.border = 'none';
FiMBbtn.style.padding = '0';
FiMBbtn.style.margin = '0';
FiMBbtn.style.right = '20px';
FiMBbtn.style.bottom = '20px';

document.body.appendChild(FiMBbtn);
