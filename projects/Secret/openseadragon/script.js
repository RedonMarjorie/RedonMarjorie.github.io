const DropAnim = (props) => /*#__PURE__*/
React.createElement("div", { className: props.visible && !props.closing ? 'drop-base drop-base-on' : 'drop-base' },
props.children);



class Trigger extends React.Component {
  constructor() {
    super();
    this.state = {
      menuVisible: false,
      menuClosing: false };

  }
  handleClick() {
    this.setState({
      menuClosing: true });

    setTimeout(() => {this.setState({
        menuVisible: false,
        menuClosing: false });
    }, 150);
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("button", { onClick: () => this.setState({ menuVisible: !this.state.menuVisible }) }, "Credits"), /*#__PURE__*/
      React.createElement(DropAnim, { visible: this.state.menuVisible, closing: this.state.menuClosing },
      this.state.menuVisible ? /*#__PURE__*/
      React.createElement(DropDown, { title: "Digital representation of the Bayeux Tapestry - XIth century", onClick: this.handleClick.bind(this) }, /*#__PURE__*/
      React.createElement("a", {href: "https://www.bayeuxmuseum.com/la-tapisserie-de-bayeux/decouvrir-la-tapisserie-de-bayeux/explorer-la-tapisserie-de-bayeux-en-ligne/"}, "Link to the RGB panorama: Représentation numérique officielle de la Tapisserie de Bayeux – XIe siècle. Crédits : Ville de Bayeux, DRAC Normandie, Université de Caen Normandie, CNRS, Ensicaen, Clichés : 2017 – La Fabrique de patrimoines en Normandie"),
      React.createElement("p", null,""),
      React.createElement("a", {href: "https://journals.openedition.org/insitu/21817"}, "RBG panorama reconstruction: Katia Zidane, Abderrahim El Moataz, Régis Clouard. The reconstruction of the Bayeux tapestry panorama as a reference tool for a spatialised system of documentary information. Image-processing algorithms devoted to panorama construction and plotting of images on this panorama. OpenEdition Journals"),
      React.createElement("p", null,""),
      React.createElement("a", {href: "https://hal.science/hal-04196665"}," Normal maps panorama generation: Marjorie Redon, Matthieu Pizenberg, Yvain Quéau, Abderrahim Elmoataz. 3D surface Approximation of the Entire Bayeux Tapestry for Improved Pedagogical Access. 4th ICCV Workshop on Electronic Cultural Heritage, Oct 2023, Paris, France.")) :
      '')));

  }}

const DropDown = (props) => /*#__PURE__*/
React.createElement("div", { className: "DropDown", onClick: props.onClick }, /*#__PURE__*/
React.createElement("h3", null, props.title),
props.children);



ReactDOM.render( /*#__PURE__*/React.createElement(Trigger, null), document.getElementById('app'));
