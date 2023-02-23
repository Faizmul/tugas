import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Image from 'next/image';
import img1 from "@/assets/image/slide1.jpg"

type Props = {
    title?: string,
    style?: string,
}

const Contact = (props: Props) => {
    return (
        <div className='mb-5'>
            <div className={`mt-4 mb-5 justify-start items-baseline ${props.style}`}>
                <p className="uppercase font-[800] mr-2">{props.title}</p><h2 className="text-animation">pangrango.</h2>
            </div>
            <div className={`mb-1 justify-start items-baseline ${props.style}`}>
                <div>
                    <div className='float-left mr-3 rounded-xl'>
                        <Image src={img1} alt="" />
                    </div>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div>
                            <TextField
                                error
                                id="outlined-error"
                                label="Error"
                                defaultValue="Hello World"
                            />
                            <TextField
                                error
                                id="outlined-error-helper-text"
                                label="Error"
                                defaultValue="Hello World"
                                helperText="Incorrect entry."
                            />
                        </div>
                        <div>
                            <TextField
                                error
                                id="filled-error"
                                label="Error"
                                defaultValue="Hello World"
                                variant="filled"
                            />
                            <TextField
                                error
                                id="filled-error-helper-text"
                                label="Error"
                                defaultValue="Hello World"
                                helperText="Incorrect entry."
                                variant="filled"
                            />
                        </div>
                        <div>
                            <TextField
                                error
                                id="standard-error"
                                label="Error"
                                defaultValue="Hello World"
                                variant="standard"
                            />
                            <TextField
                                error
                                id="standard-error-helper-text"
                                label="Error"
                                defaultValue="Hello World"
                                helperText="Incorrect entry."
                                variant="standard"
                            />
                        </div>
                        
                      </Box>
                        <p>
                            Sekolah alam Pangrango merupakan sebuah wadah kebaikan yang bergerak dibidang Pendidikan dengan tagline #SchoolOfadventure untuk mendidik anak-anak bangsa dalam menciptakan Sumber Daya Manusia (SDM) yang berkualitas dan mampu berdaya saing dengan mengedepankan kearifan lokal dan alam dibawah kaki gunung Pangrango, desa Cinagara, Kab. Bogor. Sekolah alam Pangrango termasuk sekolah formal yang memiliki jenjang Pendidikan SMP dan SMK. Sekolah alam Pangrango memiliki 7 program yang menjadi unggulan dalam merealisasikan visi dan misi..
                        </p>
                </div>
            </div>
        </div>
    )
}

export default Contact

