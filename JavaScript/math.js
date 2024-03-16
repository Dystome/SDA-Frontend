function Calculator(num1, num2, symbol)
    {
        if (symbol == "*")
        {
            return num1 * num2
        }

        if (symbol == "/")
        {
            return num1 / num2
        }

        if (symbol == "-")
        {
            return num1 - num2
        }

        if (symbol == "+")
        {
            let num3 = num1 + num2
            return  num3
        }
    }