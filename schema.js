const graphql = require('graphql');
const {GraphQLObjectType,
       GraphQLSchema,
       GraphQLInt,
       GraphQLString,
       GraphQLList
} =graphql;

const UserType= new GraphQLObjectType({
    name:'user',
    fields: ()=>({
        id:{type:GraphQLInt},
        name:{type:GraphQLString},
        email:{type:GraphQLString},
        phone:{type:GraphQLString}
    })
})
const RootQuery= new GraphQLObjectType({
    name:'Sarfraj',
    fields:{
        codeimprove:{
            type:new GraphQLList(UserType),
            resolve(parent,args){
                let data=[
                    {
                        id:12, name:'Ronit Kumar', email:'ronit@gmail.com',phone:7548548547
                    },
                    {
                        id:13, name:'sam Kumar', email:'sam@gmail.com',phone:7645854547
                    }
                ]
                return data;
            }  
          
        },
        userlist :{
            type:new GraphQLList(UserType),
            resolve(parent,args){
                let data=[
                    {
                        id:12, name:'Ronit Kumar', email:'ronit@gmail.com',phone:7548548547
                    },
                    {
                        id:13, name:'sam Kumar', email:'sam@gmail.com',phone:7645854547
                    }
                ]
                return data;
            }  
          
        },
        

    }
})

module.exports=new GraphQLSchema({query:RootQuery})
