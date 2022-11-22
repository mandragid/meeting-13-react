import "./App.css";

function App() {
  const age = 23;
  const name = "Andre";
  const time = new Date().getDate();
  const isOpen = false;
  const isWarteg = true;
  const bottom = "dress";
  const tahunKelahiran = 1999;
  const tahunSekarang = new Date().getFullYear();

  const renderToko = () => {
    return !!isOpen ? "toko buka" : "toko tutup";
  };

  const renderWarteg = () => {
    let result;
    if (isWarteg === true) {
      result = "warteg buka";
    } else {
      result = "warteg tutup";
    }
    return result;
  };

  const gender = (param) => {
    let resultGender;
    if (param === "dress") {
      resultGender = "perempuan";
    } else if (param === "celana") {
      resultGender = "laki-laki";
    } else {
      resultGender = "gatau";
    }
    return resultGender;
  };

  const penghitungUsia = (param1, param2) => {
    return param1 - param2;
  };

  const students = [
    {
      id: 1,
      name: "budi",
    },
    {
      id: 2,
      name: "rahmat",
    },
    {
      id: 3,
      name: "indah",
    },
  ];

  // const getName = students.map((item) => {
  //   return item.name;
  // });

  // const getId = students.map((item) => {
  //   return item.id;
  // });

  return (
    <>
      <div>
        <p>hello, usia saya {age} </p>
        <p>panjang nama saya adalah {name.length} huruf.</p>
        <p>hari ini adalah tanggal {time}</p>
        <p>{renderToko()}</p>
        <p>{renderWarteg()}</p>
        <p>{gender(bottom)}</p>
        <p>
          Usia saya sekarang adalah{" "}
          {penghitungUsia(tahunSekarang, tahunKelahiran)} Tahun.
        </p>
        <div>
          {/* <div>
          <p>nomor absen {getId}</p>
          <p>{getName}</p>
          </div> */}
        </div>
        <div className="students">
          {students.map((item) => {
            return (
              <div>
                <p>Nomor Absen {item.id}</p>
                <p>Nama {item.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
