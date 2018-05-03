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

export const getCacheKeys = () => (
  $.ajax({
    method: 'GET',
    url: '/cache_keys'
  })
);

export const deleteCacheKey = key => (
  $.ajax({
    method: 'GET',
    url: '/delete_cache_key/',
    data: {key}
  })
);
