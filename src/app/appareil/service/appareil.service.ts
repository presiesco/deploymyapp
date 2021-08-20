export class AppareilService {
    appareils = [
        {
            id: 1,
            name: 'machine à laver',
            status: 'eteint'
        },
        {
            id: 2,
            name: 'frigo',
            status: 'allumé'
        },
        {
            id: 3,
            name: 'ordinateur',
            status: 'eteint'
        }
    ]

    switchOnOne(i: number) {
        this.appareils[i].status = 'allumé'
    }

    switchOffOne(i: number) {
        this.appareils[i].status = 'eteint'
    }

    switchOnAll() {
        for (let appareil of this.appareils) {
            appareil.status = 'allumé';
        }
    }

    switchOffAll() {
        for (let appareil of this.appareils) {
            appareil.status = 'eteint'
        }
    }

    getAppareilById(id: number) {
        const appareil = this.appareils.find(
            (s) => {
                return s.id === id;
            }
        );
        return appareil;
    }
}