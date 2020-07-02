// anyないはず

function Calculator(source: string): number {
  let c = "";
  const tokens: any[] = [];
  let result = 0;

  for (let i = 0; i < source.length; i++) {
    c = source[i];
    if (isSpace(c)) {
      continue;
    };
    if (["+", "*", "-", "/"].indexOf(c) !== -1) {
      tokens.push(c);
      continue;
    }
    let buf: string = "";

    if (isDigit(c)) {
      buf += c;
      c = source[i++];
    }
    i--;
    tokens.push(Number(buf));
  };

  result = 0;
  let op: string = null;
  c = "";
  for (let i = 0; i < tokens.length; i++) {
    c = tokens[i];
    if (["+", "*", "-", "/"].indexOf(c) !== -1) {
      op = c;
      continue;
    }

    switch (op) {
      case "+": result += c as unknown as number;
      break;
      case "*": result *= c as unknown as number;
      break;
      case "-": result -= c as unknown as number;
      break;
      case "*": result /= c as unknown as number;
      default: result = c as unknown as number;
      break;
    }
  }
  console.log(result);
  return result;
};

function isSpace(c: string): boolean {
  return /\s/.test(c);
};

function isDigit(c: string): boolean {
    return /\d+/.test(c);
};

export { Calculator }
