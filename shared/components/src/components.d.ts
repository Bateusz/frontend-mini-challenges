/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
export namespace Components {
  interface NavigationBar {
    challengeTitle?: string;
  }
}
declare global {
  interface HTMLNavigationBarElement extends Components.NavigationBar, HTMLStencilElement {}
  var HTMLNavigationBarElement: {
    prototype: HTMLNavigationBarElement;
    new (): HTMLNavigationBarElement;
  };
  interface HTMLElementTagNameMap {
    'navigation-bar': HTMLNavigationBarElement;
  }
}
declare namespace LocalJSX {
  interface NavigationBar {
    challengeTitle?: string;
  }
  interface IntrinsicElements {
    'navigation-bar': NavigationBar;
  }
}
export { LocalJSX as JSX };
declare module '@stencil/core' {
  export namespace JSX {
    interface IntrinsicElements {
      'navigation-bar': LocalJSX.NavigationBar & JSXBase.HTMLAttributes<HTMLNavigationBarElement>;
    }
  }
}
