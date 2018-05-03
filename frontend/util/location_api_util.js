export const searchQuery = query => (
  $.ajax({
    method: 'GET',
    url: '/locations',
    data: {query}
  })
);

export const searchLocation = id => (
  $.ajax({
    method: 'GET',
    url: '/locations/' + id
  })
);
