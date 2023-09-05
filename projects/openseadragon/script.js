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
      React.createElement("p", null, "Credits : Ville de Bayeux, DRAC Normandie, Université de Caen Normandie, CNRS, ENS "),
      React.createElement("p", null," Pictures : 2017 – La Fabrique de patrimoines en Normandie."),
      React.createElement("a", {href: "https://journals.openedition.org/insitu/21817"}, "RBG panorama reconstruction: Katia Zidane, Abderrahim El Moataz, Régis Clouard."),
      React.createElement("p", null," Normal maps panorama generation : Marjorie Redon, Matthieu Pizenberg, Yvain Quéau, Abderrahim El Moataz.")) :
      '')));

  


  }}


const DropDown = (props) => /*#__PURE__*/
React.createElement("div", { className: "DropDown", onClick: props.onClick }, /*#__PURE__*/
React.createElement("h3", null, props.title),
props.children);



ReactDOM.render( /*#__PURE__*/React.createElement(Trigger, null), document.getElementById('app'));
