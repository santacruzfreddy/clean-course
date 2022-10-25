(() => {

    function getMovie(id: string) {
        console.log({ id });
    }

    function getActorsMovieByMovieId(MovieId: string) {
        console.log({ MovieId });
    }

    function getMovieCastByMovieId(MovieId: string) {
        console.log({ MovieId });
    }


    function getActorBioById(Id: string) {
        console.log({ Id });
    }

    function createMovie({ title, description, rating, cast }: Movie
    ) {
        console.log({ title, description, rating, cast });
    }

    function createActor(fullName: string, birthDate: Date): boolean {

        // tarea asincrona para verificar nombre
        // ..
        // ..
        if (fullName === 'fernando') return false;

        console.log('Crear actor');
        return true;

    }


    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) => {
        return isDead ? 1500 : isSeparated ? 2500 : isRetired ? 3000 : 4000;        
    }


})();

interface Movie {
    title: String
    description: String
    rating: number
    cast: String[]
}