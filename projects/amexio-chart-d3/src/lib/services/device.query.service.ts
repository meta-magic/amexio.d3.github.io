
import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpClient,HttpClientModule,HttpHeaders } from '@angular/common/http';


@Injectable()
export class DeviceQueryService {

  constructor( @Inject(PLATFORM_ID) private platformId: any) {

  }

  rules = {
    print: 'print',
    screen: 'screen',
    phone: '(max-width: 767px)',
    tablet: '(min-width: 768px) and (max-width: 1024px)',
    desktop: '(min-width: 1025px)',
    portrait: '(orientation: portrait)',
    landscape: '(orientation: landscape)',
    retina: '(-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi)',
  };

  Check = function(mq: any) {
    if (isPlatformBrowser(this.platformId)) {
      if (!mq) {
        return;
      }
      return window.matchMedia(mq).matches;
    } else {
      return;
    }
  };

  /**********************************************
   METHODS FOR CHECKING TYPE
   **********************************************/
  IsPhone() {
    if (isPlatformBrowser(this.platformId)) {
      return window.matchMedia(this.rules.phone).matches;
    } else {
      return null;
    }
  }

  IsTablet = function() {
    if (isPlatformBrowser(this.platformId)) {
      return window.matchMedia(this.rules.tablet).matches;
    } else {
      return null;
    }
  };

  IsDesktop = function() {
    if (isPlatformBrowser(this.platformId)) {
      return window.matchMedia(this.rules.desktop).matches;
    } else {
      return null;
    }
  };

  IsPortrait = function() {
    if (isPlatformBrowser(this.platformId)) {
      return window.matchMedia(this.rules.portrait).matches;
    } else {
      return null;
    }
  };

  IsLandscape = function() {
    if (isPlatformBrowser(this.platformId)) {
      return window.matchMedia(this.rules.landscape).matches;
    } else {
      return null;
    }
  };

  IsRetina = function() {
    if (isPlatformBrowser(this.platformId)) {
      return window.matchMedia(this.rules.retina).matches;
    } else {
      return null;
    }
  };

  browserWindow = () => {
    return window;
  }

  /**********************************************
   EVENT LISTENERS BY TYPE
   **********************************************/
  OnPhone(callBack: any) {
    if (typeof callBack === 'function' && isPlatformBrowser(this.platformId)) {
        const mql: MediaQueryList = window.matchMedia(this.rules.phone);
        this.mqlMethod(callBack, mql);
    }
  }

  OnTablet(callBack: any) {
    if (typeof callBack === 'function' && isPlatformBrowser(this.platformId)) {
        const mql: MediaQueryList = window.matchMedia(this.rules.tablet);
        this.mqlMethod(callBack, mql);
    }
  }

  OnDesktop(callBack: any) {
    if (typeof callBack === 'function' && isPlatformBrowser(this.platformId)) {
        const mql: MediaQueryList = window.matchMedia(this.rules.desktop);
        this.mqlMethod(callBack, mql);
    }
  }

  OnPortrait(callBack: any) {
    if (typeof callBack === 'function' && isPlatformBrowser(this.platformId)) {
        const mql: MediaQueryList = window.matchMedia(this.rules.portrait);
        this.mqlMethod(callBack, mql);
    }
  }

  OnLandscape(callBack: any) {
    if (typeof callBack === 'function' && isPlatformBrowser(this.platformId)) {
        const mql: MediaQueryList = window.matchMedia(this.rules.landscape);
        this.mqlMethod(callBack, mql);
    }
  }

  mqlMethod(callBack: any, mql: any) {
    mql.addListener((mql1: MediaQueryList) => {
      if (mql1.matches) {
        callBack(mql);
      }
    });
  }
}
