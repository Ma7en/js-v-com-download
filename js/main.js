


/*  
===============================================
===============================================
*/

/* start down 1 */

let d1Btn = document.querySelector(".down-1 .download-container .btn");
let d1countdown = document.querySelector(".down-1 .download-container .countdown");
let d1pleaseWaitText = document.querySelector(".down-1 .download-container .pleasWait-text");
let d1manualDownloadText = document.querySelector(".down-1 .download-container .manualDownload-text");
let d1manualDownloadLink = document.querySelector(".down-1 .download-container .manualDownload-link");

let d1timeLeft = 10;

d1Btn.addEventListener("click", () => {
    d1Btn.style.display = "none";
    d1countdown.innerHTML = "Download will begin automatically in <span>" + d1timeLeft + "</span> seconds.";
    
    let downloadTimer = setInterval(function timeCount() {
        d1timeLeft -= 1;
        d1countdown.innerHTML = "Download will begin antomatically in <span>" + d1timeLeft + "</span> seconds.";

        if (d1timeLeft <= 0) {
            clearInterval(downloadTimer);
            d1pleaseWaitText.style.display = "block";
            let download_href = "../files/Testfile.zip";
            window.location.href = download_href;
            d1manualDownloadLink.href = download_href;

            setTimeout(() => {
                d1pleaseWaitText.style.display = "none";
                d1manualDownloadText.style.display = "block";
            }, 4000);
        }

        setTimeout(() => {
            d1Btn.style.display = "block";
            d1countdown.style.display = "none";
            d1pleaseWaitText.style.display = "none";
            d1manualDownloadText.style.display = "none";
        }, 20000);

    }, 1000);
});


/* end down 1 */

/*  
===============================================
===============================================
*/

/* start down 2 */

let d2Button = document.querySelector(".down-2 .button");

d2Button.addEventListener("click", () => {
    d2Button.classList.add("active");

    setTimeout(() => {
        d2Button.classList.remove("active");

        document.querySelector(".down-2 .content i").classList.replace("bx-cloud-download", "bx-check-circle");
        document.querySelector(".down-2 .content .button-text").innerHTML = "comleted";

        if (document.querySelector(".down-2 .content .button-text").innerHTML = "comleted") {
            let download_href = "../files/Testfile.zip";
            window.location.href = download_href;
        }

        setTimeout(() => {
            document.querySelector(".down-2 .content i").classList.replace("bx-check-circle", "bx-cloud-download");
            document.querySelector(".down-2 .content .button-text").innerHTML = "download";
        }, 1000);

    }, 6000);

});



/* end down 2 */

/*  
===============================================
===============================================
*/

/* start down 3 */



/* end down 3 */

/*  
===============================================
===============================================
*/

/* start down 4 */



/* end down 4 */

/*  
===============================================
===============================================
*/

/* start down 5 */



/* end down 5 */

/*  
===============================================
===============================================
*/

/* start down 6 */



/* end down 6 */

/*  
===============================================
===============================================
*/

/* start down 7 */



/* end down 7 */

/*  
===============================================
===============================================
*/

/* start down 8 */



/* end down 8 */

/*  
===============================================
===============================================
*/

/* start down 9 */



/* end down 9 */

/*  
===============================================
===============================================
*/

/* start down 10 */



/* end down 10 */

/*  
===============================================
===============================================
*/

/* start down 11 */



/* end down 11 */

/*  
===============================================
===============================================
*/

/* start down 12 */



/* end down 12 */

/*  
===============================================
===============================================
*/

/* start down 13 */



/* end down 13 */

/*  
===============================================
===============================================
*/

/* start down 14 */



/* end down 14 */

/*  
===============================================
===============================================
*/

/* start down 15 */



/* end down 15 */

/*  
===============================================
===============================================
*/

