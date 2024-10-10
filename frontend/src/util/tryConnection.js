export async function checkConnection () {
    try{
        const respone = await fetch("api/check-connection");
        const data = await respone.json();

        if(respone.ok){
            console.log("Banco de dados está online");
        } else {
            console.error('Banco de dados está offline:', data);
        }
    }
    catch (error) {
        throw new Error("Erro ao verificar a conexão:", error);
    }
}