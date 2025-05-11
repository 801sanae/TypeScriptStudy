// 타입 별칭

let user : {
      id?: number
    , name: string
    , nickname?: string
    , birth?: string
    , bio?: string
    , location?: string
} = {
    id:1,
    name:"kim",
    nickname: "kim",
    birth: "2023-10-01",
    bio: "hello",
    location: "seoul"
}

// 타입 별칭 개길어짐 

type User = {
    id?: number
  , name: string
  , nickname?: string
  , birth?: string
  , bio?: string
  , location?: string  
};

let user1 : User = {
  id:1,
  name:"kim",
  nickname: "kim",
  birth: "2023-10-01",
  bio: "hello",
  location: "seoul"
}

// 인덱스 시그니쳐

type CountryCodes = {
    [key: string]: string
};

let countryCodes : CountryCodes = {
    "Korea": "ko",
    "UniteState": "us",
    "UniteKingdom": "uk"
};

type CountryNumberCodes = {
    [key: string]: number,
    Korea: number;
};

let CountryNumberCodes : CountryNumberCodes = {
    "Korea": 410
};