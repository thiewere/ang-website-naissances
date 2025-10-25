import { Child } from "./Child"
import { Company } from "./Company"
import { UserProfile } from "./UserProfile"

export type Declaration = {
    id: string;
    picture: string;
    comment: string;
    status: string;
    registered: string;
    child: Child;
    firstParen: UserProfile;
    secondParen: UserProfile;
    company: Company;
}