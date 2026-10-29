import {describe,expect,it} from 'vitest';
import {projects} from './data';
import {filterProjects,validateInquiry} from './utils';

describe('project filtering',()=>{
 it('returns all projects for the default filters',()=>expect(filterProjects(projects,'All','')).toHaveLength(12));
 it('filters by category and case insensitive search',()=>expect(filterProjects(projects,'Residential','wayanad').map(p=>p.slug)).toEqual(['monsoon-house']));
 it('returns no matches for a query with no result',()=>expect(filterProjects(projects,'All','not-a-project')).toHaveLength(0));
});
describe('inquiry validation',()=>{
 it('requires all requested fields and demo acknowledgement',()=>expect(Object.keys(validateInquiry({}))).toEqual(['name','email','projectType','location','budget','timeline','consent']));
 it('rejects malformed email and accepts a complete valid enquiry',()=>{
  expect(validateInquiry({name:'A',email:'wrong',projectType:'Home',location:'Kochi',budget:'Discuss',timeline:'Soon',consent:true})).toHaveProperty('email');
  expect(validateInquiry({name:'A',email:'a@example.com',projectType:'Home',location:'Kochi',budget:'Discuss',timeline:'Soon',consent:true})).toEqual({});
 });
});
