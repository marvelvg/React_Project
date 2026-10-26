import Card from "./Card";

type Student = {
    nama: string;
    job: string;
    Upskill: string;
};

const students: Student[] = [
  {
    nama: "Marvel",
    job: "Pengangguran",
    Upskill: "React",
  },
  {
    nama: "Dika",
    job: "Anjay",
    Upskill: "Data center",
  },
  {
    nama: "Andi",
    job: "Pengangguran",
    Upskill: "AI",
  },
];

const Profile = () => {
    return (
        <div className="flex flex -column">

            <Card nama="Surya" job="Sales" Upskill="Digital Marketing"/>
            
            {
              students.map((product)=>{
                  return <Card nama = {product.nama} job = {product.job} Upskill={product.Upskill} />
              })
            }
        </div>
    )
};

export default Profile;