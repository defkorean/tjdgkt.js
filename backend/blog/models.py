from django.db import models
from django.conf import settings

# stores info about blog users
class Profile(models.Model):
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete = models.PROTECT,
    )
    website = models.URLField(blank=True)
    bio = models.CharField(max_length=300, blank=True)

    def __str__(self):
        return self.user.get_username()
    
# represents category for blogs to be grouped by
class Tag(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name

# stores content and metadata of each post
class Post(models.Model):

    class Meta:
        ordering = ["-published_date"]

    # a post's content
    title = models.CharField(max_length=255, unique=True)
    subtitle = models.CharField(max_length=255, blank=True)
    body = models.TextField()

    # metadata of post
    slug = models.SlugField(max_length=255, unique=True)
    date_created = models.DateTimeField(auto_now_add=True)
    date_modified = models.DateTimeField(auto_now=True) # if user goes to edit post
    published_date = models.DateTimeField(blank=True, null=True)
    published = models.BooleanField(default=False)

    # won't delete authors that have made posts
    author = models.ForeignKey(Profile, on_delete=models.PROTECT)
    tags = models.ManyToManyField(Tag, blank=True)
