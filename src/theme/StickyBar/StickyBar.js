import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import { getCurrentPlatformName, utils, getOSName } from '@site/static/js/helpers';
import { VPN_WEBSITE_URL, OS_NAMES } from '@site/static/js/consts';

import s from './StickyBar.module.css';

const OPENING_HEIGHT = 50;

//This function, that switching <Translate> needs for correct generation of translations
const getCurrentBtnText = () => {
    switch (getOSName()) {
        case OS_NAMES.MAC_OS:
        case OS_NAMES.MAC:
        case OS_NAMES.WINDOWS:
            return (
                <Translate
                    id="sticky_bar.btn.text.download"
                    description="Sticky bar btn text with label Download"
                >
                    Download
                </Translate>
            )
        case OS_NAMES.IOS:
            return (
                <Translate
                    id="sticky_bar.btn.text.ios"
                    description="Sticky bar btn text with label App Store"
                >
                    Google Play
                </Translate>
            )
        case OS_NAMES.ANDROID:
            return (
                <Translate
                    id="sticky_bar.btn.text.android"
                    description="Sticky bar btn text with label Google Play"
                >
                    Google Play
                </Translate>
            )
        default:
            return (
                <Translate
                    id="sticky_bar.btn.text.install"
                    description="Sticky bar btn text with label Install"
                >
                    Install
                </Translate>
            )
    }
}

const eulaText = () => {
    return (
        <Translate
            id="sticky_bar.btn.baloon.text"
            description="String used for license agreement text in sticky bar"
            values={{
                eulaLink: (
                    <a href={`/eula.html`}>
                        <Translate
                            id="sticky_bar.btn.baloon.text.link"
                            description="The label for the link to license agreement"
                        >
                            License agreement
                        </Translate>
                    </a>
                )
            }}
        >
            {'By downloading the program you accept the terms of the {eulaLink}'}
        </Translate>
    )
}

const StickyBar = () => {
    const iconClassName = `stickyBarBtnIcon_${getCurrentPlatformName()}`;

    const [isVisible, setIsVisible] = useState(true);
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const onScroll = (e) => {
            setScrolling(e.target.documentElement.scrollTop > OPENING_HEIGHT);
        };
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const closeSticky = () => {
        setIsVisible(false);
    };

    return (
        <>
            {isVisible &&
                (<div className={clsx(s.stickyBar, 'annoyance', {[s.stickyBarOpen]: scrolling })}>
                    <div className={s.stickyBarIn}>
                        <div className={s.stickyBarIntro}>
                            <Translate
                                id="sticky_bar.promo.free"
                                description="String used for free GB promo in sticky bar"
                            >
                                Get 3 GB for free
                            </Translate>
                        </div>
                        <div className={s.stickyBarBtnWrap}>
                            <a
                                className={s.stickyBarBtn}
                                href={`/download.html?auto=1&lbl=knowledge_base`}
                            >
                                <span className={clsx(s.stickyBarBtnIcon, s[iconClassName])} />

                                {getCurrentBtnText()}
                            </a>
                            <div className={s.stickyBarBaloon}>
                                <div className={s.stickyBarBaloonContent}>
                                    {eulaText()}
                                </div>
                            </div>
                        </div>
                        <button
                            type='button'
                            className={s.stickyBarCloseBtn}
                            onClick={closeSticky}
                        >
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default StickyBar;
