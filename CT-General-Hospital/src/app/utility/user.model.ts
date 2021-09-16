import { Roles } from './roles.model';

export class User{
    
    
     public  staffId : number;
	 public  role_id : number;
	 public  empId : number;

	 public  title : string;
	 public  firstName : string;
	 public  lastName : string;
	 public  email : string;
	 public  birthDate : Date;

	 public  username : string;
	 public  password : string;
	 public  deleted : boolean;
	 public  status : string;
	

}