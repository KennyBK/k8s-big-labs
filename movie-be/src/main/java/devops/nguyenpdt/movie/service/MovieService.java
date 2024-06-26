package devops.nguyenpdt.movie.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import devops.nguyenpdt.movie.model.Movie;
import devops.nguyenpdt.movie.repository.MovieRepository;

import java.util.List;
import java.util.Optional;

@Service
public class MovieService {

    @Autowired
    private MovieRepository repository;

    public List<Movie> findAllMovies() {
        return repository.findAll();
    }
    public Optional<Movie> findMovieByImdbId(String imdbId) {
        return repository.findMovieByImdbId(imdbId);
    }
}
