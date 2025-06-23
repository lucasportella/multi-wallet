class TronLinkProviderFactory {
  name = 'tronLink';
  ready = false;
  isTrusted = false;
  isTronWeb = false;
  isTronLink = false;
  constructor(parameters) {
    this.isTronWeb = true;
    this.isTronLink = true;
    this.ready = true;
    this.isTrusted = true;
  }

  connect() {
    console.warn('tronLink connect not yet implemented');
  }
}

export default TronLinkProviderFactory