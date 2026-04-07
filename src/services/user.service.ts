import User, {IUser} from '../models/user.model';
import Role, {IRole}  from '../models/role.model';  

import { Types } from 'mongoose';

export const createUser = async (payload: IUser) => {
    console.log("payload", payload);
    return payload.roles.map(async (roleId) => {
        const role = await Role.findById(roleId);
        if (!role) {
            throw new Error(`Role with id ${roleId} not found`);
        } else {
            const user = new User(payload);
            return await user.save();
        }   });
}