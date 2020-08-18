import NHentai

class Controllers(object):
    def __init__(self):
        self._client = NHentai.NHentai()
    
    def paginate(self, request):
        
        page = dict(request.args).get('page')
        
        if page:
            pages = self._client.get_pages(page)
        else:
            pages = self._client.get_pages()

        return pages
    
    def random(self):
        return self._client.get_random()

    def doujin(self, id):
        return self._client._get_doujin(id)
    
    def search(self, request):

        term = dict(request.args).get('q')
        page = dict(request.args).get('page')
        sort = dict(request.args).get('sort')

        return self._client.search(term, page=page, sort=sort)