class BeautyToast{
    constructor(){
        this.darkTheme = false;
        this.iconWidth = null;
        this.iconHeight = null;
        this.iconSize = null;
        this.closeButton = true;
        this.timeout =  2500;
        this.animationTime = 150;
    }

    success({
        title = 'Success',
        id = null,
        message,
        icon = null,
        zIndex = 100,
        backgroundColor = null,
        messageColor = null,
        titleColor = null,
        progressBarColor = null,
        topbarColor = null,
        iconColor = null,
        darkTheme = this.darkTheme,
        iconWidth = this.iconWidth,
        iconHeight = this.iconHeight,
        iconSize = this.iconSize,
        closeButton = this.closeButton,
        timeout =  this.timeout,
        animationTime = this.animationTime,
        onClose = null,
        onOpen = null,
    } = {})
    {
        this.checkAndAddToastWrapper.then(toastWrapper => {
            const toastId = toastWrapper.children.length + 1;
            const toastType = 'success';
            const toastIcon = icon == null ? `<svg width="${iconWidth ?? "32"}" height="${iconHeight ?? "32"}" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27.2309 9.65179L11.731 25.1518L4.62679 18.0476L6.44803 16.2264L11.731 21.4964L25.4097 7.83054L27.2309 9.65179Z" fill="${iconColor ?? "#68D84C"}"/></svg>` : `<i class="${icon}" style="font-size: ${iconWidth != null ? iconSize +'px;' : "32px;"  }"></i>`;
            const toast = this.toastGenerator({toastType, darkTheme, closeButton, toastId, id, backgroundColor, topbarColor, toastIcon, titleColor, title, messageColor, message, progressBarColor, onClose});
            this.processToast({toast, toastId, zIndex, timeout, animationTime, onClose, onOpen});
            return toastId;
        });
    }

    error({
        title = 'Error',
        id = null,
        message,
        icon = null,
        zIndex = 100,
        backgroundColor = null,
        messageColor = null,
        titleColor = null,
        progressBarColor = null,
        topbarColor = null,
        iconColor = null,
        darkTheme = this.darkTheme,
        iconWidth = this.iconWidth,
        iconHeight = this.iconHeight,
        iconSize = this.iconSize,
        closeButton = this.closeButton,
        timeout =  this.timeout,
        animationTime = this.animationTime,
        onClose = null,
        onOpen = null,
    } = {})
    {
        this.checkAndAddToastWrapper.then(toastWrapper => {
            const toastId = toastWrapper.children.length + 1;
            const toastType = 'error';
            const toastIcon = icon == null ? `<svg width="${iconWidth ?? "31"}" height="${iconHeight ?? "31"}" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.248 23.1894C25.3835 23.3244 25.491 23.4849 25.5643 23.6615C25.6377 23.8381 25.6754 24.0275 25.6754 24.2187C25.6754 24.41 25.6377 24.5994 25.5643 24.776C25.491 24.9526 25.3835 25.113 25.248 25.248C24.9738 25.5187 24.604 25.6705 24.2187 25.6705C23.8335 25.6705 23.4637 25.5187 23.1895 25.248L15.5 17.5586L7.81054 25.248C7.53633 25.5187 7.16654 25.6705 6.78125 25.6705C6.39595 25.6705 6.02617 25.5187 5.75195 25.248C5.61648 25.113 5.50899 24.9526 5.43565 24.776C5.36231 24.5994 5.32455 24.41 5.32455 24.2187C5.32455 24.0275 5.36231 23.8381 5.43565 23.6615C5.50899 23.4849 5.61648 23.3244 5.75195 23.1894L13.4414 15.5L5.75195 7.81053C5.47896 7.53755 5.3256 7.1673 5.3256 6.78124C5.3256 6.59008 5.36325 6.40079 5.43641 6.22419C5.50956 6.04758 5.61678 5.88711 5.75195 5.75194C5.88712 5.61677 6.04759 5.50955 6.2242 5.4364C6.4008 5.36324 6.59009 5.32559 6.78125 5.32559C7.16731 5.32559 7.53756 5.47895 7.81054 5.75194L15.5 13.4414L23.1895 5.75194C23.4624 5.47895 23.8327 5.32559 24.2187 5.32559C24.6048 5.32559 24.9751 5.47895 25.248 5.75194C25.521 6.02493 25.6744 6.39518 25.6744 6.78124C25.6744 7.1673 25.521 7.53755 25.248 7.81053L17.5586 15.5L25.248 23.1894Z" fill="${iconColor ?? "#D84C4C"}"/></svg>` : `<i class="${icon}" style="font-size: ${iconWidth != null ? iconSize +'px;' : "32px;"  }"></i>`;
            const toast = this.toastGenerator({toastType, darkTheme, closeButton, toastId, id, backgroundColor, topbarColor, toastIcon, titleColor, title, messageColor, message, progressBarColor, onClose});
            this.processToast({toast, toastId, zIndex, timeout, animationTime, onClose, onOpen});
            return toastId;
        });
    }

    info({
        title = 'Info',
        id = null,
        message,
        icon = null,
        zIndex = 100,
        backgroundColor = null,
        messageColor = null,
        titleColor = null,
        progressBarColor = null,
        topbarColor = null,
        iconColor = null,
        darkTheme = this.darkTheme,
        iconWidth = this.iconWidth,
        iconHeight = this.iconHeight,
        iconSize = this.iconSize,
        closeButton = this.closeButton,
        timeout =  this.timeout,
        animationTime = this.animationTime,
        onClose = null,
        onOpen = null,
    } = {})
    {
        this.checkAndAddToastWrapper.then(toastWrapper => {
            const toastId = toastWrapper.children.length + 1;
            const toastType = 'info';
            const toastIcon = icon == null ? `<svg width="${iconWidth ?? '31'}" height="${iconHeight ?? '31'}" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 21.9583C15.866 21.9583 16.173 21.8343 16.421 21.5863C16.6681 21.3392 16.7917 21.0326 16.7917 20.6667C16.7917 20.3007 16.6681 19.9937 16.421 19.7457C16.173 19.4986 15.866 19.375 15.5 19.375C15.134 19.375 14.8275 19.4986 14.5803 19.7457C14.3323 19.9937 14.2083 20.3007 14.2083 20.6667C14.2083 21.0326 14.3323 21.3392 14.5803 21.5863C14.8275 21.8343 15.134 21.9583 15.5 21.9583ZM15.5 16.7917C15.866 16.7917 16.173 16.6677 16.421 16.4197C16.6681 16.1725 16.7917 15.866 16.7917 15.5V10.3333C16.7917 9.96736 16.6681 9.66037 16.421 9.41237C16.173 9.16523 15.866 9.04166 15.5 9.04166C15.134 9.04166 14.8275 9.16523 14.5803 9.41237C14.3323 9.66037 14.2083 9.96736 14.2083 10.3333V15.5C14.2083 15.866 14.3323 16.1725 14.5803 16.4197C14.8275 16.6677 15.134 16.7917 15.5 16.7917ZM15.5 28.4167C13.7132 28.4167 12.034 28.0774 10.4625 27.3988C8.89097 26.7211 7.52395 25.801 6.36145 24.6385C5.19895 23.476 4.27886 22.109 3.60116 20.5375C2.92261 18.966 2.58333 17.2868 2.58333 15.5C2.58333 13.7132 2.92261 12.034 3.60116 10.4625C4.27886 8.89097 5.19895 7.52395 6.36145 6.36145C7.52395 5.19895 8.89097 4.27843 10.4625 3.59987C12.034 2.92218 13.7132 2.58333 15.5 2.58333C17.2868 2.58333 18.966 2.92218 20.5375 3.59987C22.109 4.27843 23.476 5.19895 24.6385 6.36145C25.801 7.52395 26.7211 8.89097 27.3988 10.4625C28.0774 12.034 28.4167 13.7132 28.4167 15.5C28.4167 17.2868 28.0774 18.966 27.3988 20.5375C26.7211 22.109 25.801 23.476 24.6385 24.6385C23.476 25.801 22.109 26.7211 20.5375 27.3988C18.966 28.0774 17.2868 28.4167 15.5 28.4167ZM15.5 25.8333C18.3847 25.8333 20.8281 24.8323 22.8302 22.8302C24.8323 20.8281 25.8333 18.3847 25.8333 15.5C25.8333 12.6153 24.8323 10.1719 22.8302 8.16979C20.8281 6.1677 18.3847 5.16666 15.5 5.16666C12.6153 5.16666 10.1719 6.1677 8.16979 8.16979C6.1677 10.1719 5.16666 12.6153 5.16666 15.5C5.16666 18.3847 6.1677 20.8281 8.16979 22.8302C10.1719 24.8323 12.6153 25.8333 15.5 25.8333Z" fill="${iconColor ?? '#4CA5D8'}"/></svg>` : `<i class="${icon}" style="font-size: ${iconWidth != null ? iconSize +'px;' : "32px;"  }"></i>`;
            const toast = this.toastGenerator({toastType, darkTheme, closeButton, toastId, id, backgroundColor, topbarColor, toastIcon, titleColor, title, messageColor, message, progressBarColor, onClose});
            this.processToast({toast, toastId, zIndex, timeout, animationTime, onClose, onOpen});
            return toastId;
        });
    }

    warning({
        title = 'Warning',
        id = null,
        message,
        icon = null,
        zIndex = 100,
        backgroundColor = null,
        messageColor = null,
        titleColor = null,
        progressBarColor = null,
        topbarColor = null,
        iconColor = null,
        darkTheme = this.darkTheme,
        iconWidth = this.iconWidth,
        iconHeight = this.iconHeight,
        iconSize = this.iconSize,
        closeButton = this.closeButton,
        timeout =  this.timeout,
        animationTime = this.animationTime,
        onClose = null,
        onOpen = null,
    } = {})
    {
        this.checkAndAddToastWrapper.then(toastWrapper => {
            const toastId = toastWrapper.children.length + 1;
            const toastType = 'warning';
            const toastIcon = icon == null ? `<svg width="${iconWidth ?? "31"}" height="${iconHeight ?? "31"}" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.1167 5.95828L27.7721 20.3746C29.016 22.4451 28.405 25.1692 26.4068 26.4583C25.7362 26.8926 24.9544 27.124 24.1555 27.1248H6.84324C4.49112 27.1248 2.58333 25.1486 2.58333 22.7086C2.58333 21.8832 2.80679 21.0759 3.22658 20.3746L11.8833 5.95828C13.1259 3.88773 15.7532 3.25353 17.7514 4.54261C18.3042 4.89911 18.7718 5.38348 19.1167 5.95828ZM16.2492 7.04198C16.091 6.94027 15.9139 6.87167 15.7285 6.84033C15.5432 6.80898 15.3533 6.81553 15.1706 6.8596C14.9878 6.90366 14.8158 6.98432 14.6651 7.0967C14.5144 7.20908 14.388 7.35085 14.2936 7.51344L5.63812 21.9323C5.49752 22.1673 5.42341 22.4361 5.4237 22.7099C5.4237 23.5236 6.0592 24.1824 6.84454 24.1824H24.1542C24.4202 24.1824 24.6799 24.1049 24.9046 23.9602C25.2271 23.746 25.4545 23.4155 25.5395 23.0378C25.6244 22.66 25.5603 22.264 25.3606 21.9323L16.7051 7.51344C16.5916 7.3236 16.4361 7.16231 16.2505 7.04198H16.2492ZM15.5 21.9581C15.1574 21.9581 14.8289 21.8221 14.5866 21.5798C14.3444 21.3376 14.2083 21.0091 14.2083 20.6665C14.2083 20.3239 14.3444 19.9954 14.5866 19.7531C14.8289 19.5109 15.1574 19.3748 15.5 19.3748C15.8426 19.3748 16.1711 19.5109 16.4133 19.7531C16.6556 19.9954 16.7917 20.3239 16.7917 20.6665C16.7917 21.0091 16.6556 21.3376 16.4133 21.5798C16.1711 21.8221 15.8426 21.9581 15.5 21.9581ZM15.5 10.3332C15.8426 10.3332 16.1711 10.4692 16.4133 10.7115C16.6556 10.9537 16.7917 11.2822 16.7917 11.6248V16.7915C16.7917 17.1341 16.6556 17.4626 16.4133 17.7048C16.1711 17.9471 15.8426 18.0831 15.5 18.0831C15.1574 18.0831 14.8289 17.9471 14.5866 17.7048C14.3444 17.4626 14.2083 17.1341 14.2083 16.7915V11.6248C14.2083 11.2822 14.3444 10.9537 14.5866 10.7115C14.8289 10.4692 15.1574 10.3332 15.5 10.3332Z" fill="${iconColor ?? "#D8D24C"}"/></svg>` : `<i class="${icon}" style="font-size: ${iconWidth != null ? iconSize +'px;' : "32px;"  }"></i>`;
            const toast = this.toastGenerator({toastType, darkTheme, closeButton, toastId, id, backgroundColor, topbarColor, toastIcon, titleColor, title, messageColor, message, progressBarColor, onClose});
            this.processToast({toast, toastId, zIndex, timeout, animationTime, onClose, onOpen});
            return toastId;
        }).catch(response => {
            console.error("Error: ", response);
        });
    }

    checkAndAddToastWrapper = new Promise((resolve, reject) => {
        const toastWrapper = document.querySelector('.beautyToast-wrapper');
        if(toastWrapper == null){
            const body = document.querySelector('body');
            const wrapper = document.createElement('div');
            wrapper.classList.add('beautyToast-wrapper');
            body.appendChild(wrapper);
            resolve(wrapper);
        }else{
            reject("Can't create BeautyToast Wrapper!");
        }
    });

    processToast = ({toast, toastId, zIndex, timeout, animationTime, onClose, onOpen}) => {
        new Promise((resolve, reject) => {
            const toastWrapper = document.querySelector('.beautyToast-wrapper');
            toastWrapper.setAttribute('style', `z-index: ${zIndex} !important;`);
            toastWrapper.innerHTML += toast;
            resolve(toastId);
        }).then(async (toastId) => {
            const specificToast = document.querySelector(`.beautyToast[toast-id="${toastId}"]`)
            setTimeout(() => {
                specificToast.classList.add('show');
            }, 50);
            setTimeout(() => {
                specificToast.classList.add('animate-child');
            }, animationTime);

            onOpen != null && onOpen();

            return toastId;
        }).then(async (toastId) => {
            let remainingTime = timeout;
            const specificToast = document.querySelector(`.beautyToast[toast-id="${toastId}"]`);
            const timeoutInterval = setInterval(() => {
                remainingTime -= 100;
                let percentage = Math.floor((remainingTime / timeout) * 100);
                specificToast.querySelector('.beautyToast-progress').style.width = percentage + "%";

                if(remainingTime == 0){
                    clearInterval(timeoutInterval);
                    closeToast(toastId, onClose);
                }
            }, 100);
            
        });
    }

    destroy(){
        const toastWrapper = document.querySelector('.beautyToast-wrapper');
        this.fadeOut(toastWrapper);

        setTimeout(() => {
            toastWrapper.remove();
        }, 300);
    }

    settings({darkTheme, iconWidth, iconHeight, iconSize, closeButton, timeout, animationTime}){
        darkTheme != undefined && (this.darkTheme = darkTheme);
        iconWidth != undefined && (this.iconWidth = iconWidth);
        iconHeight != undefined && (this.iconHeight = iconHeight);
        iconSize != undefined && (this.iconSize = iconSize);
        closeButton != undefined && (this.closeButton = closeButton);
        timeout != undefined && (this.timeout = timeout);
        animationTime != undefined && (this.animationTime = animationTime);
    }

    toastGenerator({toastType, darkTheme, closeButton, toastId, id, backgroundColor, topbarColor, toastIcon, titleColor, title, messageColor, message, progressBarColor, onClose}){
        const toast = `<div class="beautyToast ${darkTheme ? 'beautyToast-dark' : ''} beautyToast-${toastType}  ${!closeButton ? 'no-close' : ''}" toast-id="${toastId}" ${id != null ? 'id="' + id + '"' : ''} style="${backgroundColor != null ? 'background-color: '+ backgroundColor + '!important;' : ''}"><div class="beautyToast-topbar" ${topbarColor != null ? 'style="background-color:'+topbarColor+'!important;"' : ''}></div><div class="beautyToast-body"><div class="beautyToast-title-group"><div class="beautyToast-icon">${toastIcon}</div><h5 class="beautyToast-title" style="${titleColor != null ? 'color: '+ titleColor + '!important;' : ''}">${title}</h5></div><p class="beautyToast-text" style="${messageColor != null ? 'color: '+ messageColor + '!important;' : ''}">${message}</p></div>${closeButton ? `<button class="beautyToast-close" onclick="closeToast(${toastId}, ${onClose})">&times;</button>` : ''}<div class="beautyToast-progress" style="${ progressBarColor != null ? 'background-color:'+progressBarColor+"!important;" : ""}"></div></div>`;

        return toast;
    }

    fadeOut(target){
        var fadeEffect = setInterval(function () {
            if (!target.style.opacity) {
                target.style.opacity = 1;
                target.style.transition = 'all .2s linear';
            }
            if (target.style.opacity > 0) {
                target.style.opacity -= 0.1;
            } else {
                clearInterval(fadeEffect);
            }
        }, 20);
    }
}

const closeToast = (toastId, onClose) => {
    new Promise((resolve, reject) => {
        const specificToast = document.querySelector(`.beautyToast[toast-id="${toastId}"]`)
        if(specificToast != null){
            specificToast.classList.remove('show');
            resolve(specificToast);
        }
    }).then(specificToast => {
        setTimeout(async () => {
            specificToast.style.display = 'none';
            specificToast.remove();
        }, 400);
        
        return true;
    }).then(response => {
        onClose != null && onClose();
    });
}

globalThis.beautyToast = new BeautyToast();