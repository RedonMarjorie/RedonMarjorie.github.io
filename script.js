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
      React.createElement("button", { onClick: () => this.setState({ menuVisible: !this.state.menuVisible }) }, "Crédits"), /*#__PURE__*/
      React.createElement(DropAnim, { visible: this.state.menuVisible, closing: this.state.menuClosing },
      this.state.menuVisible ? /*#__PURE__*/
      React.createElement(DropDown, { title: "Représentation numérique de la Tapisserie de Bayeux · XIe siècle", onClick: this.handleClick.bind(this) }, /*#__PURE__*/
      React.createElement("p", null, "Crédits : Ville de Bayeux, DRAC Normandie, Université de Caen Normandie, CNRS, ENS "),
      React.createElement("p", null," Clichés : 2017 – La Fabrique de patrimoines en Normandie.")) :


      '')));




  }}


const DropDown = (props) => /*#__PURE__*/
React.createElement("div", { className: "DropDown", onClick: props.onClick }, /*#__PURE__*/
React.createElement("h3", null, props.title),
props.children);



ReactDOM.render( /*#__PURE__*/React.createElement(Trigger, null), document.getElementById('app'));
