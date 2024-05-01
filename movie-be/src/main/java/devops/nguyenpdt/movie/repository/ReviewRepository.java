package devops.nguyenpdt.movie.repository;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import devops.nguyenpdt.movie.model.Review;

@Repository
public interface ReviewRepository extends MongoRepository<Review, ObjectId> {
}
