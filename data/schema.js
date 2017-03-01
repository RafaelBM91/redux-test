import { graphql,
         GraphQLSchema,
         GraphQLObjectType,
         GraphQLString,
         GraphQLInt,
        } from 'graphql';

import {goldbergs} from './database';

function getGoldberg(id) {
  return goldbergs[id]
}

const goldbergType = new GraphQLObjectType({
  name: "Goldberg",
  description: "Member of The Goldbergs",
  fields: {
    character: {
      type: GraphQLString,
      description: "Name of the character",
    },
    actor: {
      type: GraphQLString,
      description: "Actor playing the character",
    },
    role: {
      type: GraphQLString,
      description: "Family role"
    },
    traits: {
      type: GraphQLString,
      description: "Traits this Goldberg is known for"
    },
    id: {
      type: GraphQLInt,
      description: "ID of this Goldberg"
    }
  }
});

const queryType = new GraphQLObjectType({
  name: "query",
  description: "Goldberg query",
  fields: {
    goldberg: {
      type: goldbergType,
      args: {
        id: {
          type: GraphQLInt
        }
      },
      resolve: function(_, args){
        return getGoldberg(args.id)
      }
    }
  }
});

export const schema = new GraphQLSchema({
  query: queryType
});
