import React from 'react';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

interface State {
  currentEnthusiasm: number;
}

class Hello extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { currentEnthusiasm: props.enthusiasmLevel || 1 };
  }

  updateEnthusiasm(deltaValue: number) {
    let currentEnthusiasm = this.state.currentEnthusiasm + deltaValue;
    if (currentEnthusiasm < 1) currentEnthusiasm = 1;
    this.setState({
      currentEnthusiasm,
    });
  }

  render() {
    const { name } = this.props;
    const { currentEnthusiasm } = this.state;

    if (currentEnthusiasm <= 0) {
      throw new Error('You could be a little more enthusiastic. :D');
    }

    return (
      <div className="hello">
        <div className="greeting">
          Hello {name + getExclamationMarks(currentEnthusiasm)}
        </div>
        <div className="controls">
          <button
            onClick={() => this.updateEnthusiasm(-1)}
            disabled={currentEnthusiasm <= 1}
          >
            -
          </button>
          <button onClick={() => this.updateEnthusiasm(1)}>+</button>
        </div>
      </div>
    );
  }
}

export default Hello;

// helpers

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}
