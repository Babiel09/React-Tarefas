export function cronometroSegundos(tempo:string):number{
    const [horas='0', minutos='0', segundos='0'] = tempo.split(":");
    //Transformando todos os elementos, menos o segundo em seus respectivos tipos:
    const hora = Number(horas) * 3600
    const minuto = Number(minutos) * 60
    const segundo = Number(segundos) * 1
    return hora + minuto + segundo
};