import { AtomName, atoms } from "./../models";

export function getElectronicConfiguration(atomName : AtomName) : number[]{
    const electronicConfiguration : number[]=  [];
    let numberOfElectrons = getAtomicNumber(atomName)
    let currentShellNumber = 1;
    while(numberOfElectrons > 0){
        let shellNumberOfElectrons = 2 * Math.pow(currentShellNumber, 2)
        if(numberOfElectrons - shellNumberOfElectrons > 0){
            electronicConfiguration.push(shellNumberOfElectrons)
        }
        else{
            electronicConfiguration.push(numberOfElectrons)
        }
        numberOfElectrons = numberOfElectrons - shellNumberOfElectrons
        currentShellNumber+= 1
    }
    return electronicConfiguration
}

export const  getAtomicNumber = (atomName : AtomName) => atoms.indexOf(atomName)+1