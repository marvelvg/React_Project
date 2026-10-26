type Student = {
    nama?: string;
    job: string;
    Upskill: string;
};

const Card = (props: Student) => {
    const {nama = "Anonymus", job, Upskill} = props;
    return (
        <div className="ml-3 mt-3 border-2 border-dashed w-75 border-indigo-500 rounded-md">
            <p> Nama : {nama} </p>
            <p> Pekerjaan :  {job} </p>
            <p> Upskill : {Upskill} </p>
        </div>
    );
};

export default Card;