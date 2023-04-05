/*const foo1 = (str:string[]) => {
    const s = str.pop();
    s.toUpperCase()
}
const foo = (str:string[]):void => {
    const s:string = str.pop();
    s.toUpperCase();

};*/
/*interface IUser<T> {
    name: string;
    age: number;
    status: boolean;
    data: T
}
const user2:IUser<any> = {age: 25, name: 'sdf', status: true, data: 22};
const user1:IUser<string> = {age: 11, name: 'Edfg', status: true, data: 'sdfg'};
const user3:Partial<IUser<number>> = {age:22, name: 'Cdfg'};*/
/*class User {

    constructor(public id: number, public name: string, public age: number) {
        this.id = id;
        this.age = age;
        this.name = name;
    }
}
const user: User = new  User(12, 'Faf', 12);
console.log(user);*/

interface ISpase {
    area:() => number;
    pirim:() => number;
};
interface Igriting {
    print: () => void;
}
class Pryam implements ISpase {
    constructor(private a: number, private b: number) {
    };

    area(): number {
        return this.a * this.b;
    }

    pirim(): number {
        return (this.a + this.b) * 2;
    }

    print(): void {
        console.log('PRIVEEET!!!');
    }

};
class Treug implements ISpase {
    constructor(private a:number, private b: number, private c: number) {
    }
    area(): number {
        return this.a * this.b / this.c;
    }

    pirim(): number {
        return this.b + this.c + this.a;
    }

}
const shapes:ISpase[] = [
    new Treug(1, 2, 3),
    new Pryam(1, 2),
    new Treug(2,3,4),
    new Pryam(4,5)
];
for (let shape of shapes) {
    console.log(shape.area());
    console.log(shape.pirim())
}
const rectangle:Pryam = new Pryam(3,4);
rectangle.print();

const area = {
    "mission_name": "Starlink-15 (v1.0)",
    "launch_date_local": "2020-10-24T11:31:00-04:00",
    "launch_site": {
        "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
    },
    "links": {
        "article_link": "http://some.com",
        "video_link": "https://youtu/J442-ti-Dhg"
    },
    "rocket": {
        "rocket_name": "Falcon 9",
        "first_stage": {
            "cores": [
                {
                    "flight": 7,
                    "core": {
                        "reuse_count": 6,
                        "status": "unknown"
                    }
                }
            ]
        },
        "second_stage": {
            "payloads": [
                {
                    "payload_type": "Satellite",
                    "payload_mass_kg": 15400,
                    "payload_mass_lbs": 33951.2
                }
            ]
        }
    }
};
interface Iface {
    mission_name: string,
    launch_date_local: string,
    launch_site: {site_name_long: string},
    links: {article_link: string, video_link: string},
    rocket: {rocket_name: string,
            first_stage: {
                cores: {
                    flight: number,
                    core: {
                        reuse_count: number,
                        status: string
                    }
                }[]
            },
            second_stage: {payloads: {
                    payload_type: string,
                    payload_mass_kg: number,
                    payload_mass_lbs: number
                }[]
                }

    }
}

type MyNumber = number|string;
const a:MyNumber = 22;
const asd = ():number => {
    return 19
}
type TypeOfFunc = ReturnType<typeof asd>;
const d:TypeOfFunc = 22;
{
    const user = {
        name:"Max",
        age:18,
        gender:'male'
    }

    function sum(a,b){
        return a+b
    }
    type MyReturn = ReturnType<typeof sum>;
    const a:MyReturn = 22;
}