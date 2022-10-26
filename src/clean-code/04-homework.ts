(() => {

    function isRedFruit(nameFruit: string): boolean {
        let nameFruits: String[] = ['manzana', 'cereza', 'ciruela'];
        return nameFruits.includes(nameFruit);
    }

    type FruitColor = 'red' | 'yellow' | 'purple';
    function getFruitsByColor(colorFruit: FruitColor): string[] {
        let fruitsColor = {
            red: ['manzana', 'fresa'],
            yellow: ['piña', 'banana'],
            purple: ['moras', 'uvas']
        }
        
        // switch (colorFruit) {
        //     case 'red':
        //         return ['manzana', 'fresa'];
        //     case 'yellow':
        //         return ['piña', 'banana'];
        //     case 'purple':
        //         return ['moras', 'uvas'];
        //     default:
        //         throw Error('the color must be: red, yellow, purple');
        // }

        if (!Object.keys(fruitsColor).includes(colorFruit)) throw Error('the color must be: red, yellow, purple');
        return fruitsColor[colorFruit];
    }

    // Simplificar esta función
    let isFirstStepWorking = true;
    let isSecondStepWorking = true;
    let isThirdStepWorking = true;
    let isFourthStepWorking = true;

    function workingSteps() {
        if (!isFirstStepWorking) return 'First step broken.';

        if (!isSecondStepWorking) return 'Second step broken.';

        if (!isThirdStepWorking) return 'Third step broken.';

        return isFourthStepWorking ? 'Working properly!' : 'Fourth step broken.';
    }


    // isRedFruit
    console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
    console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // true

    //getFruitsByColor
    console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
    console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
    console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
    // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

    // workingSteps
    console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados


})();
