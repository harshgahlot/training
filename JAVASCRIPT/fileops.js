const { error } = require('console');
const { tracingChannel } = require('diagnostics_channel');
const fs1=require('fs');
const fs=require('fs/promises');
const readline = require('readline');
async function readdata(filename) {
    try {
        if(fs1.existsSync(filename)){
            const data= await fs.readFile(filename);
            console.log(data.toString());
        }else{
            console.log('file does not exist');
        }
    } catch (error) {
        console.log(error);
    }
    
}

async function write(filename,message) {
    try {
        const data= await fs.writeFile(filename,message);
        
            
            console.log(data);
        
            
        
    } catch (error) {
        console.log(error);
    }
    
}

async function copy(src,des) {
    try {
        await fs.copyFile(src,des);
        console.log("file copied successfully");
    } catch (error) {
        console.log(error);
    }

    
}

async function create(foldername) {
    try {
        const folder=await fs.mkdir(foldername);
        console.log(`created`);
    } catch (error) {
        console.log(error);
    }
    
}

async function deletef(foldername) {
    try {
        const folder=await fs.rmdir(foldername);
        console.log("deleted")
    } catch (error) {
        console.log(error);
    }
    
}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function menu() {
    console.log('1. Read Data from File');
    console.log('2. Write Data to File');
    console.log('3. Copy a file');
    console.log('4. create folder');
    console.log('5. Delete folder');
    console.log('6. Exit');
    rl.question('Choose an option: ', (option) => {
        switch (option) {
            case '1':
                rl.question('Enter filename: ', (filename) => {
                    readdata(filename).then(() => menu());
                });
                break;
            case '2':
                rl.question('Enter filename: ', (filename) => {
                    rl.question('Enter message: ', (message) => {
                        write(filename, message).then(() => menu());
                    });
                });
                break;
            case '3':
                rl.question('enter filename:',(filename)=>{
                    rl.question('enter destination : ', (des)=>{
                        copy(filename,des).then(()=>menu());
                    });
                });
                break;
            case '4':
                rl.question('enter foldername:',(foldername)=>{
                    create(foldername).then(()=>menu());
                });
                break;
            case '5':
                rl.question('enter foldername:',(foldername)=>{
                    deletef(foldername).then(()=>menu());
                });
                break;
            case '6':
                rl.close();
                break;
            default:
                console.log('Invalid option');
                menu();
                break;
        }
    });
}

menu();