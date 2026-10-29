import type {Project} from './data';
import {z} from 'zod';
export function filterProjects(projects:Project[],category:string,query:string){const q=query.trim().toLocaleLowerCase();return projects.filter(p=>(category==='All'||p.category===category)&&(!q||`${p.name} ${p.place} ${p.category}`.toLocaleLowerCase().includes(q)));}
export const inquirySchema=z.object({name:z.string().trim().min(1,'Please complete this field.'),email:z.string().trim().email('Please enter a valid email address.'),projectType:z.string().min(1,'Please complete this field.'),location:z.string().trim().min(1,'Please complete this field.'),budget:z.string().min(1,'Please complete this field.'),timeline:z.string().min(1,'Please complete this field.'),consent:z.boolean().refine(Boolean,'Please confirm this is a demonstration form.')});
export type InquiryValues=z.infer<typeof inquirySchema>;
export function validateInquiry(values:Record<string,unknown>){const result=inquirySchema.safeParse(values);if(result.success)return {};const errors:Record<string,string>={};result.error.issues.forEach(issue=>{const key=String(issue.path[0]??'form');errors[key]=issue.message;});return errors;}
