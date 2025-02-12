import Parser from 'ua-parser-js';
import { OS_NAMES, BROWSER_NAMES, VPN_BROWSER_NAMES } from './consts';

const UNKNOWN_MARK = 'unknown';
const EDGE_REGEX = /(edge|edgios|edga|edg)\/((\d+)?[\w.]+)/i;

const getBrowserName = () => {
    try {
        if (window.navigator && window.navigator.userAgent && EDGE_REGEX.test(window.navigator.userAgent)) {
            return BROWSER_NAMES.EDGE;
        }

        return String(new Parser().getBrowser().name || UNKNOWN_MARK).toLowerCase();
    } catch (error) {
        return UNKNOWN_MARK;
    }
};

export const getOSName = () => {
    try {
        const osName = String(new Parser().getOS().name || UNKNOWN_MARK).toLowerCase();
        if (osName === OS_NAMES.MAC_OS && window.navigator.maxTouchPoints > 1) {
            return OS_NAMES.IOS;
        }

        if (osName === OS_NAMES.LINUX &&
            ((navigator.userAgentData && navigator.userAgentData.platform.toLowerCase() === OS_NAMES.ANDROID) || getBrowserName() === 'miui browser')
        ) {
            return OS_NAMES.ANDROID;
        }

        return osName;
    } catch (error) {
        return UNKNOWN_MARK;
    }
};

export const getCurrentPlatformName = () => {
    const osName = getOSName();
    const currentBrowser = getBrowserName();

    if (Object.values(OS_NAMES).includes(osName) && osName !== OS_NAMES.LINUX) {
        console.log(osName);
        return osName === OS_NAMES.MAC_OS ? OS_NAMES.MAC : osName;
    }

    console.log(currentBrowser);

    return Object.values(VPN_BROWSER_NAMES).includes(currentBrowser) ? currentBrowser : BROWSER_NAMES.CHROME;
};
