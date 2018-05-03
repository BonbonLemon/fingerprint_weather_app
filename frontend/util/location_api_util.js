export const searchQuery = query => (
  $.ajax({
    method: 'GET',
    url: '/locations',
    data: {query}
  })
);
