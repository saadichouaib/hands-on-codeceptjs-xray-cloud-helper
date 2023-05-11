/// <reference types='codeceptjs' />
type ChaiWrapper = import('codeceptjs-chai');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any }
  interface Methods extends REST, ChaiWrapper, Puppeteer {}
  interface I extends WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}
