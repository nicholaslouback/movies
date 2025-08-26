export const ROUTES = {
  home: {
    path: "/"
  },
  movie:{
    list: {
      path: "/movie"
    },
    details: {
      path: "/movies/:id",
      params: {
        id: true,
      }
    },
    new: {
      path: "/movies/new"
    }
  }
}